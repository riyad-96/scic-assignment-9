export default function Footer() {
  return (
    <footer className="border-t border-neutral-200 bg-neutral-50 px-4">
      <div className="mx-auto max-w-6xl py-8">
        <div className="flex flex-col items-center justify-between gap-4 text-sm text-neutral-600 sm:flex-row">
          {/* Left */}
          <p>© {new Date().getFullYear()} ItemStore. All rights reserved.</p>

          {/* Right */}
          <div className="flex gap-6">
            <a href="#" className="hover:text-neutral-900">
              Privacy
            </a>
            <a href="#" className="hover:text-neutral-900">
              Terms
            </a>
            <a href="#" className="hover:text-neutral-900">
              Contact
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
