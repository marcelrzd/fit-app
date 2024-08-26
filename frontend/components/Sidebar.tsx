"use client";

import { MoreVertical, ChevronLast, ChevronFirst } from "lucide-react";
import { useContext, createContext, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconProp } from "@fortawesome/fontawesome-svg-core";

const SidebarContext = createContext({ expanded: false });

export default function Sidebar({ children }: { children: React.ReactNode }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <aside className="h-screen transition-all duration-300 max-w-[200px]">
      <nav className="h-full p-4 flex flex-col bg-white border-r shadow-sm transition-all duration-300">
        <div className="px-4 pb-2 flex justify-between items-center">
          <span
            className={`transition-all duration-300 ${
              expanded ? "text-red-500" : "text-blue-500"
            }`}
          >
            {expanded ? "Fit App" : "FA"}
          </span>

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
              className={`transition-all duration-300 ${
                expanded ? "opacity-90" : "w-10"
              }`}
            >
              {children}
            </ul>
          </div>
        </SidebarContext.Provider>
      </nav>
    </aside>
  );
}

interface SidebarItemProps {
  icon: IconProp;
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
          transition-colors group max-w-[150px]
          ${
            active
              ? "bg-gradient-to-tr from-indigo-200 to-indigo-100 text-indigo-800"
              : "hover:bg-indigo-50 text-gray-600"
          }
      `}
    >
      <FontAwesomeIcon icon={icon} className="transition-all duration-300" />
      <span
        className={`overflow-hidden transition-all duration-300 ${
          expanded ? "w-52 ml-3 opacity-100" : "w-0 opacity-0"
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
