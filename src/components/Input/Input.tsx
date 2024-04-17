"use client";

import { useState } from "react";
import classNames from "classnames";

export default function Input({
  text,
  type,
  placeholder,
  onChange,
  value,
  required,
}: {
  text: string;
  type: string;
  placeholder: string;
  onChange?: (e: any) => void;
  value?: string;
  required?: string;
}) {
  const [isFocus, setIsFocus] = useState(false);

  return (
    <div>
      <label
        className={classNames(
          "flex flex-col gap-[1.6rem] text-[#929298] text-[1.2rem] tracking-[-.012rem] relative before:content-[''] before:block before:h-[1px] before:bg-[#1a1b1d] before:absolute before:bottom-0 before:w-0 before:duration-300",
          isFocus && !required && "before:!w-full"
        )}
      >
        {text}
        <input
          required={Boolean(required)}
          value={value}
          type={type}
          placeholder={placeholder}
          onChange={onChange}
          onFocus={() => {
            setIsFocus(true);
          }}
          onBlur={() => {
            setIsFocus(false);
          }}
          className={classNames(
            "text-[2.7rem] tracking-[-.032rem] font-medium text-[#1a1b1d] leading-[1.15] border-b focus:outline-none placeholder:text-[#e1e2e0]",
            required && value === "" ? "border-[#ef3b24]" : "border-[#e1e2e0]"
          )}
        />
      </label>
      {required && value === "" && (
        <p className="text-[#ef3b24] text-[1.2rem] pt-[.8rem] tracking-[-.012rem]">
          {required}
        </p>
      )}
    </div>
  );
}
