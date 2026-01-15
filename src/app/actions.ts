// app/actions.ts
'use server';

import { cookies } from 'next/headers';

export async function loginAction(formData: FormData) {
  const email = formData.get('email');
  const password = formData.get('password');

  if (email === 'user@example.com' && password === '123456') {
    (await cookies()).set('session', 'true', {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      maxAge: 60 * 60 * 24,
      path: '/',
    });

    return { success: true, message: 'Login Successful!' };
  }

  return { success: false, message: 'Invalid credentials!' };
}

export async function logoutAction() {
  (await cookies()).delete('session');

  return { success: true, message: 'Logout Successful!' };
}
