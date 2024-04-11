import React from "react";

export default function List({ list }: { list: any }) {
  return (
    <ul className="mt-[2rem] text-[1.2rem] tracking-[-.012rem] text-white flex uppercase justify-center">
      {list.map((item: any, index: number) => (
        <li
          key={index}
          className="h-[2.4rem] px-[.8rem] border border-[#ffffff4d] rounded-[100px] flex items-center"
        >
          <a href={item.href} target="_blank">
            {item.text}
          </a>
        </li>
      ))}
    </ul>
  );
}
