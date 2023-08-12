import Layout from "@/app/components/Layout";
import "./globals.css";
import Providers from "./components/Providers";

export const metadata = {
  title: "mude-dev",
  description: "Personal website created by Müde:0",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ja" suppressHydrationWarning>
      <Providers>
        <Layout>{children}</Layout>
      </Providers>
    </html>
  );
}
