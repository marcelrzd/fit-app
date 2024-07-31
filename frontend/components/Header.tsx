import Link from "next/link";
import Sidebar, { SidebarItem } from "./Sidebar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faHome,
  faUsers,
  faGears,
} from "@fortawesome/free-solid-svg-icons";

export default function Header() {
  return (
    <header>
      <nav className="flex justify-between p-4">
        <div className="flex gap-2">
          <Sidebar>
            <SidebarItem text="Home" icon={faBars} />
          </Sidebar>
          <h1>My Site</h1>
        </div>
        <ul className="flex justify-between gap-4">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/about">About</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
