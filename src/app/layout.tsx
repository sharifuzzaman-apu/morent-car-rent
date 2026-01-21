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
      <body className="min-h-screen flex flex-col w-[1440px] mx-auto bg-[#F6F7F9] text-gray-900">
        <Providers>
          <Navbar />
          <main className="flex-1 w-[1312px] mx-auto">{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
