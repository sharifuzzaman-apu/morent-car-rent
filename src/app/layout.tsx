import Providers from './providers';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import './globals.css';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col w-full mx-auto bg-[#F6F7F9] text-gray-900">
        <Providers>
          <Navbar />
          <main className="flex-1 w-full max-w-328 mx-auto px-2 md:px-4">
            {children}
          </main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
