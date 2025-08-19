import Providers from "./providers";
import "./globals.css";

export const metadata = {
  title: "E-commerce Next",
};

export default function RootLayout({ children }: { children: React.ReactNode}) {
  return (
    <html lang="en">
      <body>
        <Providers>
          <header className="bg-gray-800 text-white p-4">
            <nav className="container mx-auto flex justify-between items-center">
              <a href="/" className="text-xl font-bold">E-commerce Next</a>
              <div>
                <a href="/login" className="mr-4">Login</a>
                <a href="/register">Register</a>
              </div>
            </nav>
          </header>
          <main className="container mx-auto p-4">{children}</main>
        </Providers>
      </body>
    </html>
  );
}
