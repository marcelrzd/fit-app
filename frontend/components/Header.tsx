import Link from "next/link";

export default function Header() {
  return (
    <header>
      <nav className="flex justify-between p-4">
        <h1>My Site</h1>
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
