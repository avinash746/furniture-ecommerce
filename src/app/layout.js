import "./globals.css";
import { Footer } from "@/components/Footer";
import { ExampleNavbarTwo } from "@/components/Navbar";
import { CartProvider } from "../context/CartContext.js"; 

import CartIcon from "@/components/fixedCart";
import AuthProvider from "@/context/AuthProvider";
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <AuthProvider>
      <body  style={{ fontFamily: "Ubuntu Sans" }}>
        <ExampleNavbarTwo />
        <CartProvider> 
          {children}
          <CartIcon/>
        </CartProvider>
         <Footer />
      </body>
      </AuthProvider>
    </html>
  );
}
