import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";

const inter = Inter({ subsets: ["latin"] });

import Sidebar, { SidebarItem } from "../components/Sidebar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faHome,
  faUsers,
  faGears,
} from "@fortawesome/free-solid-svg-icons";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} h-screen`}>
        <div className="flex h-full">
          <div>
            <Sidebar>
              <SidebarItem text="Home" icon={faBars} />
            </Sidebar>
          </div>
          <div className="flex flex-col flex-grow">
            <div className="w-full h-16 top-0">
              <Header />
            </div>
            <main className=" px-6 py-2 overflow-y-auto h-screen">
              {children}
            </main>
          </div>
        </div>
      </body>
    </html>
  );
}
