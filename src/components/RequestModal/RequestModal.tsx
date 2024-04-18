"use client";

import { LayoutModal, Button, Input } from "@/components";
import { useRef, useState } from "react";
import { withMask } from "use-mask-input";

export default function RequestModal({
  closeModal,
}: {
  closeModal: (arg: boolean) => void;
}) {
  const [flag, setFlag] = useState(false);
  const [values, setValues] = useState({
    name: "",
    tel: "",
    email: "",
    company: "",
    comment: "",
    file: { name: "" },
  });

  const inputFileRef = useRef<HTMLInputElement>(null);

  const handleChangeFile = async (e: any) => {
    const file = e.target.files[0];
    setValues({ ...values, file: file });
  };

  const onSubmin = () => {
    setFlag(true);
    values.tel && console.log(values);
    // const formData = new FormData();
    // formData.append("image", values.file);
  };

  return (
    <LayoutModal closeModal={closeModal}>
      <div className="flex flex-col h-full">
        <h3 className="text-[1.6rem] text-[#1a1b1d] font-medium tracking-[-.016rem] leading-[1.2] mb-[2rem]">
          Let's build something <br />great together
        </h3>
        <form className="flex flex-col gap-[1.6rem] flex-auto">
          <div className="flex flex-col gap-[1.6rem]">
            <Input
              text="name"
              type="text"
              placeholder="jon"
              value={values.name}
              onChange={(e: any) =>
                setValues({ ...values, name: e.target.value })
              }
            />
            <div className="relative">
              <Input
                text="phone number"
                type="tel"
                placeholder="+1 xxx xxx xx xx"
                value={values.tel}
                error={!values.tel && flag ? "Введите номер телефона" : ""}
                onChange={(e: any) =>
                  setValues({ ...values, tel: e.target.value })
                }
                inputRef={withMask("+1 999 999 99 99")}
              />
            </div>
            <Input
              text="e-mail"
              type="email"
              placeholder="jon@jones.com"
              value={values.email}
              onChange={(e: any) =>
                setValues({ ...values, email: e.target.value })
              }
            />
            <Input
              text="company name"
              type="text"
              placeholder="meta"
              value={values.company}
              onChange={(e: any) =>
                setValues({ ...values, company: e.target.value })
              }
            />
            <div className="relative">
              <Input
                text="load file"
                type="text"
                placeholder="your file for us"
                className="cursor-pointer pr-8"
                readOnly
                value={values.file.name}
                onClick={() => {
                  inputFileRef?.current?.click();
                }}
              />
              <img
                src="img/file.svg"
                alt=""
                className="absolute w-10 right-0 bottom-3"
              />
            </div>
            <Input
              text="comment"
              type="text"
              placeholder="if you have something to add"
              value={values.comment}
              onChange={(e: any) =>
                setValues({ ...values, comment: e.target.value })
              }
            />
            <input
              ref={inputFileRef}
              type="file"
              accept="image/png,image/jpeg,application/pdf,application/msword,application/x-rar-compressed"
              onChange={(e) => handleChangeFile(e)}
              className="my-hidden"
            />
          </div>
          <div className="mt-auto flex justify-between">
            <p className="text-[#929298] text-[1.2rem] tracking-[-.012rem]">
              By sending this form I confirm that I have <br />
              <a href="#" className="text-[#1a1b1d]">
                read and accept the Privacy Policy
              </a>
            </p>
            <Button text="send" clickHandler={onSubmin} />
          </div>
        </form>
      </div>
    </LayoutModal>
  );
}
