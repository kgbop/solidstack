"use client";

import { useState, useRef, useEffect } from "react";
import classNames from "classnames";
import { Button } from "@/components";

export default function ({ myRef }: { myRef: any }) {
  const [coordinates, setCoordinates] = useState({
    clientX: 0,
    clientY: 0,
  });

  useEffect(() => {
    function setCursor(e: any) {
      if (myRef.current) {
        setCoordinates({
          clientX: e.pageX - myRef.current.offsetLeft,
          clientY: e.pageY - myRef.current.offsetTop,
        });
      }
    }

    myRef?.current?.addEventListener("mousemove", setCursor);
  }, []);

  return (
    <div className={classNames("absolute top-0 bottom-0 left-0 right-0")}>
      <div
        style={{
          top: `${coordinates.clientY}px`,
          left: `${coordinates.clientX}px`,
        }}
        className={classNames("absolute")}
      >
        <Button text="Подробнее" />
      </div>
    </div>
  );
}
