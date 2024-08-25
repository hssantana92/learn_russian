import type { Metadata } from "next";
import { Inter } from "next/font/google";
import 'bootstrap/dist/css/bootstrap.css';
import BootstrapClient from './controllers/Bootstrap';
import "./globals.css";
import { UserProvider } from '@auth0/nextjs-auth0/client';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Travel Russian",
  description: "Learn basic russian phrases and the cyrillic alphabet",
};

export default function RootLayout({ children, }: Readonly<{children: React.ReactNode;}>) {
  return (
    <html lang="en" className="h-100">
      <UserProvider>
      <head>
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.7.1/jquery.min.js" async></script>
      </head>
      <body className="d-flex flex-column h-100">{children}
      <BootstrapClient />
      </body>
      </UserProvider>
    </html>
  );
}
