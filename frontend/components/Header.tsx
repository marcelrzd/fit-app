import Link from "next/link";

export default function Header() {
  return (
    <header>
      <nav className="flex justify-between py-4 px-6">
        <div className="flex"></div>
        <ul className="flex justify-between gap-4">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/nutritional_info">About</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
