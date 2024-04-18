"use client";

import { useState, useEffect } from "react";
import classNames from "classnames";
import { Button } from "@/components";
import { useWindowSize } from "@/hooks/windowSize";

export default function ({ myRef, href }: { myRef: any; href: string }) {
  const [coordinates, setCoordinates] = useState({
    clientX: 0,
    clientY: 0,
  });

  const size = useWindowSize();

  useEffect(() => {
    function setCursor(e: any) {
      if (myRef.current) {
        setCoordinates({
          clientX: e.pageX - myRef.current.offsetLeft,
          clientY: e.pageY - myRef.current.offsetTop,
        });
      }
    }
    document.addEventListener("mousemove", setCursor);
    return () => {
      document.removeEventListener("mousemove", setCursor);
    };
  }, []);

  return (
    <div
      className={classNames(
        "absolute top-0 bottom-0 left-0 right-0 z-20 overflow-hidden"
      )}
    >
      {size.width && size.width < 767 ? (
        <div className="w-[4rem] h-[3.2rem] bg-[#d5ff0c] absolute right-[2rem] bottom-[2rem] flex items-center justify-center text-2xl">
          →
        </div>
      ) : (
        <div
          style={{
            top: `${coordinates.clientY}px`,
            left: `${coordinates.clientX}px`,
          }}
          className={classNames(
            "absolute",
            coordinates.clientY > myRef?.current?.clientHeight ||
              coordinates.clientY <= 0
              ? "hidden"
              : ""
          )}
        >
          <Button text="Read more" />
        </div>
      )}
      <a
        href={href}
        target="_blank"
        className="absolute left-0 right-0 top-0 bottom-0"
      ></a>
    </div>
  );
}
