"use client";

import { useEffect, useState } from "react";
import classNames from "classnames";

export default function Input({
  text,
  type,
  placeholder,
  onChange,
  value,
  error,
  onClick,
  className,
  inputRef,
  readOnly,
}: {
  text: string;
  type: string;
  placeholder: string;
  onChange?: (e: any) => void;
  value?: string;
  error?: string;
  onClick?: (e: any) => void;
  className?: string;
  inputRef?: any;
  readOnly?: boolean;
}) {
  const [isFocus, setIsFocus] = useState(false);

  return (
    <div>
      <label
        className={classNames(
          "flex flex-col gap-[1.6rem] text-[#929298] text-[1.2rem] tracking-[-.012rem] relative before:content-[''] before:block before:h-[1px] before:bg-[#1a1b1d] before:absolute before:bottom-0 before:w-0 before:duration-300",
          isFocus && !error && "before:!w-full"
        )}
      >
        {text}
        <input
          ref={inputRef}
          readOnly
          value={value}
          type={type}
          placeholder={placeholder}
          onChange={onChange}
          onClick={onClick}
          onFocus={() => {
            setIsFocus(true);
          }}
          onBlur={() => {
            setIsFocus(false);
          }}
          className={classNames(
            "text-[2.7rem] tracking-[-.032rem] font-medium text-[#1a1b1d] leading-[1.15] border-b focus:outline-none placeholder:text-[#e1e2e0]",
            error ? "border-[#ef3b24]" : "border-[#e1e2e0]",
            className
          )}
        />
      </label>
      {error && (
        <p className="text-[#ef3b24] text-[1.2rem] pt-[.8rem] tracking-[-.012rem]">
          {error}
        </p>
      )}
    </div>
  );
}
