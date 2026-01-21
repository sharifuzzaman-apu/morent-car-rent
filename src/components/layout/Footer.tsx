export default function Footer() {
  return (
    <footer className="bg-gray-50 shadow-2xl">
      <div className="container mx-auto px-4 py-8 text-sm text-gray-500">
        <div className="flex flex-col gap-4 md:flex-row md:justify-between">
          <p>© {new Date().getFullYear()} MORENT. All rights reserved.</p>
          <div className="flex gap-4">
            <span>Privacy</span>
            <span>Terms</span>
            <span>Support</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
