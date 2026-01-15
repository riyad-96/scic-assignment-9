import { cookies } from 'next/headers';
import Link from 'next/link';
import LogoutButton from './logoutButton';

export default async function Header() {
  const session = (await cookies()).get('session');
  const isLoggedIn = session?.value === 'true';

  return (
    <header className="sticky top-0 flex h-12.5 items-center border-b border-neutral-200 bg-white px-4">
      <div className="mx-auto flex max-w-6xl flex-1 items-center justify-between">
        {/* Logo / Brand */}
        <Link href="/" className="text-xl font-semibold">
          ItemStore
        </Link>

        {/* Navigation */}
        <nav className="flex items-center gap-6 text-sm">
          <Link href="/" className="text-neutral-600 hover:text-neutral-900">
            Home
          </Link>

          <Link
            href="/items"
            className="text-neutral-600 hover:text-neutral-900"
          >
            Items
          </Link>

          {!isLoggedIn && (
            <Link
              href="/auth/login"
              className="rounded-md bg-neutral-900 px-4 py-2 text-white hover:bg-neutral-800"
            >
              Login
            </Link>
          )}
          {isLoggedIn && (
            <LogoutButton />
          )}
        </nav>
      </div>
    </header>
  );
}
