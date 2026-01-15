'use client';

import { logoutAction } from '@/app/actions';

export default function LogoutButton() {
  const logoutfn = async () => {
    // await logout
    await logoutAction();
  };

  return (
    <button
      onClick={logoutfn}
      className="rounded-md bg-neutral-900 px-4 py-2 text-white hover:bg-neutral-800"
    >
      Logout
    </button>
  );
}
