"use client";

import { usePathname, useSearchParams } from "next/navigation";

export default function PageTitle() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  // Reconstruct the full URL
  const paramsString = searchParams.toString();
  const currentUrl = paramsString ? `${pathname}?${paramsString}` : pathname;

  const formatTitle = (url: string) => {
    const title = url.split("/").pop();
    return title?.replace(/_/g, " ");
  };

  return (
    <>
      <span className="uppercase text-2xl font-bold">
        {formatTitle(currentUrl)}
      </span>
    </>
  );
}
