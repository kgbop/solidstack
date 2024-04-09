"use client";

import { useState } from "react";
import classNames from "classnames";

export default function Input({
  text,
  type,
  placeholder,
}: {
  text: string;
  type: string;
  placeholder: string;
}) {
  const [isFocus, setIsFocus] = useState(false);

  return (
    <label
      className={classNames(
        "flex flex-col gap-[1.6rem] text-[#929298] text-[1.2rem] tracking-[-.012rem] relative before:content-[''] before:block before:h-[1px] before:bg-[#1a1b1d] before:absolute before:bottom-0 before:w-0 before:duration-300",
        isFocus && "before:!w-full"
      )}
    >
      {text}
      <input
        type={type}
        placeholder={placeholder}
        onFocus={() => {
          setIsFocus(true);
        }}
        onBlur={() => {
          setIsFocus(false);
        }}
        className="text-[2.7rem] tracking-[-.032rem] font-medium text-[#1a1b1d] leading-[1.15] border-b border-[#e1e2e0] focus:outline-none placeholder:text-[#e1e2e0] "
      />
    </label>
  );
}
