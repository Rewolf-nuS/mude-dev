import Layout from "@/components/Layout";
import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "mude-dev",
  description: "Personal website created by Müde:0",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ja">
      <Layout>{children}</Layout>
    </html>
  );
}
