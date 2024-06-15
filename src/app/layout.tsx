import type { Metadata } from "next";
import { Inter } from "next/font/google";
// import {MantineProvider} from '@mantine/core';
// import { TonConnectButton, TonConnectUIProvider } from '@tonconnect/ui-react';
import "./globals.css";
// import '@mantine/core/styles.css';
import SideBar from '@/components/SideBar';
const inter = Inter({ subsets: ["latin"] });


export const metadata: Metadata = {
  title: "TON Admin Panel",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    // <TonConnectUIProvider manifestUrl="http://lcoalhost:3001/config">
    <html lang="en">
      <body className={inter.className}>
        {/* <MantineProvider > */}
            <main>
                {children}
            </main>
        {/* </MantineProvider> */}
      </body>
    </html>
    // </TonConnectUIProvider>
  );
}