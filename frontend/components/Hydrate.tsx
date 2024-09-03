"use client";

import { useEffect, useState } from "react";

export default function Hydrate({ children }: { children: React.ReactNode }) {
  const [isHydrated, setIsHydrated] = useState(false);

  useEffect(() => {
    setIsHydrated(true);
  }, []);
  return (
    <>
      {isHydrated ? (
        <body className={`h-screen`}>{children}</body>
      ) : (
        <body></body>
      )}
    </>
  );
}
