"use client";

import { useState, useEffect } from "react";

export default function Clock() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const year = time.getFullYear();
  const hours = time.getHours();
  const minutes = time.getMinutes();
  const seconds = time.getSeconds();

  const timeString = `${year}_${hours}:${minutes}:${seconds}`;

  return (
    <div
      className="text-[#929298] text-[1.2rem] tracking-[-.024rem] uppercase absolute bottom-0 left-1/2 -translate-x-1/2 font-medium lg:static
      lg:transform-none"
    >
      <time suppressHydrationWarning>toronto.{timeString}</time>
    </div>
  );
}
