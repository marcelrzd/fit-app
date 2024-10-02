import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Sidebar, { SidebarItem } from "../components/Sidebar";

import {
  faBars,
  faRulerVertical,
  faDumbbell,
  faHome,
} from "@fortawesome/free-solid-svg-icons";
import { faNutritionix } from "@fortawesome/free-brands-svg-icons";
import Hydrate from "@/components/Hydrate";

export const metadata: Metadata = {
  title: "Fit Companion App",
  description: "Your personal fitness companion",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Hydrate>
        <div className="flex h-full">
          <div>
            <Sidebar>
              <SidebarItem text="Home" icon={faHome} link="/" />
              <SidebarItem
                text="Nutritional Info"
                icon={faNutritionix}
                link="/nutritional_info"
              />
              <SidebarItem
                text="Body Measurements"
                icon={faRulerVertical}
                link="/"
              />
              <SidebarItem text="Training" icon={faDumbbell} link="/" />
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
      </Hydrate>
    </html>
  );
}
