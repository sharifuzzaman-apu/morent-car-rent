import Link from 'next/link';
export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200 mt-12">
      <div className="max-w-[1312px] mx-auto px-4 pt-8 pb-4">
        <div className="flex flex-col  md:flex-row md:justify-between md:items-start gap-8">
          {/* Logo and description */}
          <div className="flex-1 min-w-[200px]">
            <div className="text-blue-600 font-bold text-xl mb-2">MORENT</div>
            <p className="text-gray-500 text-sm max-w-xs">
              Our vision is to provide convenience and help increase your sales
              business.
            </p>
          </div>
          {/* Links */}
          <div className="flex flex-1 justify-between min-w-[400px]">
            <div>
              <div className="font-semibold text-gray-700 mb-2">About</div>
              <ul className="space-y-1 text-gray-500 text-sm">
                <li>
                  <Link href="#">How it works</Link>
                </li>
                <li>
                  <Link href="#">Featured</Link>
                </li>
                <li>
                  <Link href="#">Partnership</Link>
                </li>
                <li>
                  <Link href="#">Business Relation</Link>
                </li>
              </ul>
            </div>
            <div>
              <div className="font-semibold text-gray-700 mb-2">Community</div>
              <ul className="space-y-1 text-gray-500 text-sm">
                <li>
                  <Link href="#">Events</Link>
                </li>
                <li>
                  <Link href="#">Blog</Link>
                </li>
                <li>
                  <Link href="#">Podcast</Link>
                </li>
                <li>
                  <Link href="#">Invite a friend </Link>
                </li>
              </ul>
            </div>
            <div>
              <div className="font-semibold text-gray-700 mb-2">Socials</div>
              <ul className="space-y-1 text-gray-500 text-sm">
                <li>
                  <Link href="#">Discor</Link>
                </li>
                <li>
                  <Link href="#">Instagram</Link>
                </li>
                <li>
                  <Link href="#">Twitter</Link>
                </li>
                <li>
                  <Link href="#">Facebook</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        {/* Copyright row */}
        <div className="flex flex-col md:flex-row md:justify-between items-center border-t border-gray-200 mt-8 pt-4 text-xs text-gray-400">
          <span>© {new Date().getFullYear()} MORENT. All rights reserved.</span>
          <div className="flex gap-6 mt-2 md:mt-0">
            <span>Privacy & Policy</span>
            <span>Terms & Condition</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
