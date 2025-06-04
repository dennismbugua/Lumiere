import { Toaster } from "react-hot-toast";
import { CartProvider } from "./context/CartContext";
import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <CartProvider>
          <Toaster />
          {children}
        </CartProvider>
      </body>
    </html>
  );
}
