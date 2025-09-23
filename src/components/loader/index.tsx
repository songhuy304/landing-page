"use client";
import React, { useEffect } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import NProgress from "nprogress";
// Import styles in a more optimized way
// CSS is now imported in a separate stylesheet to avoid render blocking
const Loader = () => {
  let pathname = usePathname();
  let searchParams = useSearchParams();

  useEffect(() => {
    const handleStart = () => NProgress.start();
    const handleStop = () => NProgress.done();
    handleStop();

    return () => {
      handleStart();
    };
  }, [pathname, searchParams]);

  return <></>;
};

export default Loader;
