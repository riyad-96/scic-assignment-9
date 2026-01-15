'use client';

import { useState } from 'react';
import { loginAction } from '../../actions';
import { useRouter } from 'next/navigation';

export default function Login() {
  const router = useRouter();
  const [message, setMessage] = useState('');

  async function handleFormSubmit(formData: FormData) {
    const result = await loginAction(formData);

    setMessage(result.message);

    if (result.success) {
      router.push('/');
    }
  }

  return (
    <div className="w-full max-w-md rounded-lg border border-neutral-200 bg-white p-6 shadow-sm">
      <h2 className="mb-4 text-center text-2xl font-bold text-neutral-900">
        Login
      </h2>

      <form action={handleFormSubmit} className="flex flex-col gap-4">
        <input
          data-input-email
          type="email"
          name="email"
          placeholder="Email"
          required
          className="rounded border border-neutral-300 px-3 py-2 focus:ring-2 focus:ring-neutral-900 focus:outline-none"
        />
        <input
          data-input-password
          type="password"
          name="password"
          placeholder="Password"
          required
          className="rounded border border-neutral-300 px-3 py-2 focus:ring-2 focus:ring-neutral-900 focus:outline-none"
        />

        <div className="flex gap-2">
          <button
            type="submit"
            className="flex-1 rounded bg-neutral-900 py-2 text-white transition hover:bg-neutral-800"
          >
            Login
          </button>

          <button
            type="button"
            onClick={() => {
              const emailInput = document.querySelector(
                '[data-input-email]',
              ) as HTMLInputElement;
              const passwordInput = document.querySelector(
                '[data-input-password]',
              ) as HTMLInputElement;
              emailInput.value = 'user@example.com';
              passwordInput.value = '123456';
            }}
            className="rounded bg-neutral-900 px-4 py-2 text-white transition hover:bg-neutral-800"
          >
            Fill Demo
          </button>
        </div>
      </form>

      {message && (
        <p className="mt-4 text-center text-sm text-neutral-700">{message}</p>
      )}
    </div>
  );
}
