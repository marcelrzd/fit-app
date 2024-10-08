import PageTitle from "./PageTitle";

export default function Header() {
  return (
    <header>
      <nav className="flex justify-between h-16 shadow-md">
        <div></div>
        <div className="flex items-center justify-center">
          <PageTitle />
        </div>
        <div className="relative flex items-center justify-center px-4">
          <div className="bg-blue-300 w-12 h-12 p-3 rounded-full cursor-pointer hover:shadow-lg transition-all ease-in-out">
            MR
          </div>
        </div>
      </nav>
    </header>
  );
}
