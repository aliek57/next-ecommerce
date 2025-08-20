import { CartProvider } from "./contexts/cartContext";
import "./globals.css";
import Footer from "./components/Footer";
import Nav from "./components/Nav";
import ToastProvider from "./toastProvider";

export const metadata = {
  title: "E-commerce Next",
};

export default function RootLayout({ children }: { children: React.ReactNode}) {
  return (
    <html lang="en">
      <body>
        <CartProvider>
          <Nav/>
          <main className="container mx-auto">{children}</main>
          <ToastProvider>{children}</ToastProvider>
        </CartProvider>
        <Footer/>
      </body>
    </html>
  );
}