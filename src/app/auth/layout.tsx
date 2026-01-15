import Link from 'next/link';
import { ReactNode } from 'react';

export default function layout({ children }: { children: ReactNode }) {
  return (
    <div className="grid h-screen place-items-center overflow-y-auto bg-neutral-50">
      <div className="absolute top-4 left-4">
        <Link href="/" className="text-xl font-semibold">
          ItemStore
        </Link>
      </div>

      {children}
    </div>
  );
}
