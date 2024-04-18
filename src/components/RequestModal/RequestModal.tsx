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
          оставьте заявку <br />и с вами свяжется менеджер
        </h3>
        <form className="flex flex-col gap-[1.6rem] flex-auto">
          <div className="flex flex-col gap-[1.6rem]">
            <Input
              text="имя"
              type="text"
              placeholder="Сергей"
              value={values.name}
              onChange={(e: any) =>
                setValues({ ...values, name: e.target.value })
              }
            />
            <div className="relative">
              <Input
                text="номер телефона"
                type="tel"
                placeholder="+7 xxx xxx xx xx"
                value={values.tel}
                error={!values.tel && flag ? "Введите номер телефона" : ""}
                onChange={(e: any) =>
                  setValues({ ...values, tel: e.target.value })
                }
                inputRef={withMask("+7 999 999 99 99")}
              />
            </div>
            <Input
              text="e-mail"
              type="email"
              placeholder="s.gordeev@pik.ru"
              value={values.email}
              onChange={(e: any) =>
                setValues({ ...values, email: e.target.value })
              }
            />
            <Input
              text="название компании"
              type="text"
              placeholder="пик"
              value={values.company}
              onChange={(e: any) =>
                setValues({ ...values, company: e.target.value })
              }
            />
            <div className="relative">
              <Input
                text="загрузить файл"
                type="text"
                placeholder="ваш файл для нас"
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
              text="комментарий"
              type="text"
              placeholder="если есть, что добавить"
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
              Нажимая кнопку, вы подтверждаете свое согласие <br />
              <a href="#" className="text-[#1a1b1d]">
                на обработку персональных данных
              </a>
            </p>
            <Button text="отправить" clickHandler={onSubmin} />
          </div>
        </form>
      </div>
    </LayoutModal>
  );
}
