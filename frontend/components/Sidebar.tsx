"use client";

import { MoreVertical, ChevronLast, ChevronFirst } from "lucide-react";
import { useContext, createContext, useState } from "react";

const SidebarContext = createContext({ expanded: false });

export default function Sidebar({ children }: { children: React.ReactNode }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <aside className="h-screen transition-all duration-300">
      <nav className="h-full flex flex-col bg-white border-r shadow-sm transition-all duration-300">
        <div className="px-4 pb-2 flex justify-between items-center">
          <span
            className={` transition-all duration-300 ${
              expanded ? "text-red-500" : "text-blue-500"
            }`}
          >
            {expanded ? "Fit App" : "FA"}
          </span>

          {/* <img
            src="https://img.logoipsum.com/243.svg"
            className={`overflow-hidden transition-all ${
              expanded ? "w-32 opacity-90" : "w-0" // todo: show initials when hidden
            }`}
            alt=""
          /> */}
          <button
            onClick={() => setExpanded((curr) => !curr)}
            className="rounded-lg bg-gray-50 hover:bg-gray-100"
          >
            {expanded ? <ChevronFirst /> : <ChevronLast />}
          </button>
        </div>

        <SidebarContext.Provider value={{ expanded }}>
          <div
            className={`flex-1 flex flex-col transition-all duration-300 ${
              expanded ? "w-64" : "w-20"
            }`}
          >
            <ul
              className={`rounded-lg transition-all duration-300 ${
                expanded ? "opacity-90" : "w-[40px]"
              }`}
            >
              {children}
            </ul>
          </div>
        </SidebarContext.Provider>

        {/* <div className="flex p-3  rounded-lg">
          <img
            src="https://ui-avatars.com/api/?background=c7d2fe&color=3730a3&bold=true"
            alt=""
            className="w-10 h-10 rounded-md"
          />
          <div
            className={`
              flex justify-between items-center
              overflow-hidden transition-all ${expanded ? "w-52 ml-3" : "w-0"}
          `}
          >
            <div className="leading-4">
              <h4 className="font-semibold">John Doe</h4>
              <span classNande"text-xs text-gray-600">johndoe@gmail.com</span>
            </div>
            <MoreVertical size={20} />
          </div>
        </div> */}
      </nav>
    </aside>
  );
}

interface SidebarItemProps {
  icon: string;
  text: string;
  active?: boolean;
  alert?: boolean;
}

export function SidebarItem({ icon, text, active, alert }: SidebarItemProps) {
  const { expanded } = useContext(SidebarContext);

  return (
    <li
      className={`
        relative flex items-center py-2 px-3 my-1
        font-medium rounded-md cursor-pointer
        transition-colors group
        ${
          active
            ? "bg-gradient-to-tr from-indigo-200 to-indigo-100 text-indigo-800"
            : "hover:bg-indigo-50 text-gray-600"
        }
    `}
    >
      {icon}
      <span
        className={`overflow-hidden transition-all duration-300 ${
          expanded ? "w-52 ml-3" : "w-0"
        }`}
      >
        {text}
      </span>
      {alert && (
        <div
          className={`absolute right-2 w-2 h-2 rounded bg-indigo-400 ${
            expanded ? "" : "top-2"
          }`}
        />
      )}

      {!expanded && (
        <div
          className={`
          absolute left-full rounded-md px-2 py-1 ml-12
          bg-indigo-100 text-indigo-800 text-sm
          invisible opacity-20 -translate-x-3 transition-all duration-300
          group-hover:visible group-hover:opacity-100 group-hover:translate-x-0
      `}
        >
          {text}
        </div>
      )}
    </li>
  );
}
