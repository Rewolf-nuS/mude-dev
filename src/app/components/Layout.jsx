import Header from "./Header";
import Footer from "./Footer";
import { Analytics } from "@vercel/analytics/react";

export default function Layout({ children }) {
  return (
    <body className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1 max-w-4xl w-full mx-auto px-2">{children}</main>
      <Footer />
      <Analytics />
    </body>
  );
}
