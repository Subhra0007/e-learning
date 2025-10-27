import './globals.css';
import Navbar from './components/Navbar/index';
import Footer from './components/Footer/Footer';
import WhatsAppButton from './components/whatsappButton/WhatsAppButton';

export const metadata = {
  title: 'Education',
  description: 'Learning website',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
        <Footer />
        <WhatsAppButton /> 
      </body>
    </html>
  );
}
