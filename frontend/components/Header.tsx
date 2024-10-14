import PageTitle from "./PageTitle";

export default function Header() {
  return (
    <header>
      <nav className="flex justify-between h-20 shadow-md">
        <div></div>
        <div className="flex items-center justify-center">
          <PageTitle />
        </div>
        <div className="relative flex items-center justify-center px-4">
          <div className="bg-blue-300 w-14 h-14 p-4 font-semibold rounded-full cursor-pointer hover:shadow-lg transition-all ease-in-out">
            MR
          </div>
        </div>
      </nav>
    </h