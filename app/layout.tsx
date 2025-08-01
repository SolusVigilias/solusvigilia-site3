import "../styles/globals.css";
import { ReactNode } from "react";
import Head from "next/head";

export const metadata = {
  title: "Solus Vigilias",
  description: "Information Structure Philosopher",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600&family=Playfair+Display:ital,wght@1,700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <body className="relative text-white">
        <div
          className="absolute inset-0 -z-20 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('/images/sofia-spitzer-m17-composite.webp')",
          }}
        />
        <div className="absolute inset-0 -z-10 bg-black/60" />
        {children}
      </body>
    </html>
  );
}