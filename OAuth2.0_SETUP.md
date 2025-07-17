✅ Here's what you need to do for Google & GitHub to work on localhost:
🔹 1. Add http://localhost:3000 as a redirect URI
Each provider needs you to register the exact domain where your app will receive the OAuth callback.

Provider Where to configure
Google Google Cloud Console → OAuth 2.0 Client → Add Authorized Redirect URI (https://console.cloud.google.com/apis/credentials)
GitHub GitHub Developer Settings → OAuth Apps → Authorization callback URL (https://github.com/settings/developers)
🔁 The redirect URI must match what you’ve configured in NextAuth:

ts
// Typically something like this:
http://localhost:3000/api/auth/callback/google
http://localhost:3000/api/auth/callback/github
🔹 2. Set environment variables
In your .env.local file:

env

# Google

GOOGLE_ID=your-google-client-id
GOOGLE_SECRET=your-google-client-secret

# GitHub

GITHUB_ID=your-github-client-id
GITHUB_SECRET=your-github-client-secret

# NextAuth

NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET=some-random-secret
🔹 3. Avoid HTTPS locally (unless required)
Some providers like Google require https in production, but are okay with http://localhost for development — just make sure you check the "Allow localhost" checkbox when available.

⚠️ Gotchas to watch for
Make sure there are no trailing slashes in redirect URIs.

Some providers don't support port changes, so localhost:3001 might not work unless explicitly added.

When using Google, watch out for Error 400: redirect_uri_mismatch — that’s your hint that the URI in your dev app doesn’t match the one in the console.

You're totally good to use social logins on localhost — it's just about matching up those redirect URIs exactly. Let me know if you want help double-checking your Google Cloud or GitHub settings 🔐✨

When using Google, watch out for Error 400: redirect_uri_mismatch — that’s your hint that the URI in your dev app doesn’t match the one in the console.
Exactly — that error is Google’s way of saying: “I don’t recognize where this request came from.”

Here’s how to silence it once and for all:

🔐 Fixing redirect_uri_mismatch in Google OAuth
Go to Google Cloud Console

Find your OAuth 2.0 Client under APIs & Services > Credentials

Click it, then:

Add this to Authorized Redirect URIs:

http://localhost:3000/api/auth/callback/google
✅ Make sure it matches exactly with what NextAuth is sending (no trailing slashes or typos)

In your .env.local, confirm:

env
NEXTAUTH_URL=http://localhost:3000
Restart your dev server after saving the .env changes

🧠 Pro tip
If you log the sign-in attempt on your backend, you’ll see the redirect URI that was sent to Google. Compare that verbatim to what’s in the console — even a trailing / can break it.

Let me know if you’d like me to inspect your full .env and console setup side by side — I’ll help you pinpoint the mismatch with pixel-perfect precision 🔍✨
