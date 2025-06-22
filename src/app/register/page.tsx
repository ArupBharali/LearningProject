'use client';

import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { login } from '@/shared/store/slices/authSlice';
import { useRouter } from 'next/navigation';

export default function RegisterPage() {
  const dispatch = useDispatch();
  const router = useRouter();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();

    // TODO: replace with real registration logic
    const fakeUser = { id: 'new123', name, email };
    const fakeToken = 'regtoken456';

    dispatch(login({ user: fakeUser, token: fakeToken }));
    router.push('/');
  };

  return (
    <div className="max-w-md mx-auto py-10">
      <h2 className="text-2xl font-bold mb-6">Register</h2>
      <form onSubmit={handleRegister} className="space-y-4">
        <input
          type="text"
          className="w-full p-2 border rounded"
          placeholder="Full Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <input
          type="email"
          className="w-full p-2 border rounded"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          className="w-full p-2 border rounded"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit" className="w-full bg-green-600 text-white p-2 rounded">
          Sign Up
        </button>
      </form>
    </div>
  );
}
