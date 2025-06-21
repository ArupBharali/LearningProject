// /lib/utils/crypto.ts

const SECRET = 'your-app-password-or-passphrase';
const SALT = new TextEncoder().encode('react-query-persistence-salt');

function getKey(): Promise<CryptoKey> {
  return window.crypto.subtle
    .importKey('raw', new TextEncoder().encode(SECRET), 'PBKDF2', false, ['deriveKey'])
    .then(baseKey =>
      window.crypto.subtle.deriveKey(
        {
          name: 'PBKDF2',
          salt: SALT,
          iterations: 100_000,
          hash: 'SHA-256'
        },
        baseKey,
        { name: 'AES-GCM', length: 256 },
        false,
        ['encrypt', 'decrypt']
      )
    );
}

export async function encrypt(value: string): Promise<string> {
  const key = await getKey();
  const iv = window.crypto.getRandomValues(new Uint8Array(12));
  const encoded = new TextEncoder().encode(value);

  const cipher = await window.crypto.subtle.encrypt(
    { name: 'AES-GCM', iv },
    key,
    encoded
  );

  const buffer = new Uint8Array(iv.length + cipher.byteLength);
  buffer.set(iv);
  buffer.set(new Uint8Array(cipher), iv.length);

  return btoa(String.fromCharCode(...buffer));
}

export async function decrypt(value: string): Promise<string> {
  const data = Uint8Array.from(atob(value), c => c.charCodeAt(0));
  const iv = data.slice(0, 12);
  const cipher = data.slice(12);

  const key = await getKey();
  const plainBuffer = await window.crypto.subtle.decrypt(
    { name: 'AES-GCM', iv },
    key,
    cipher
  );

  return new TextDecoder().decode(plainBuffer);
}
