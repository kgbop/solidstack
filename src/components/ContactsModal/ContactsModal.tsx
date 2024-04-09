import { LayoutModal, Button } from "@/components";

export default function ContactsModal({
  activeModal,
  closeModal,
}: {
  activeModal: boolean;
  closeModal: (arg: boolean) => void;
}) {
  const list = [
    { text: "youtube →", href: "" },
    { text: "telegram", href: "" },
    { text: "vc.ru", href: "" },
  ];

  return (
    <LayoutModal active={activeModal} closeModal={closeModal}>
      <div className="flex flex-col h-full relative">
        <p className="text-[1.6rem] text-[#1a1b1d] font-medium tracking-[-.016rem] leading-[1.2]">
          москва <br />
          ул. профсоюзная 76
        </p>
        <span className="text-[#f3f3f3] text-[4.4rem] font-medium uppercase absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          [:)]
        </span>
        <div className="mt-auto">
          <p className="text-[#929298] text-[4.4rem] font-medium uppercase leading-[1.2]">
            стань <br />
            первым <br />
            вместе с нами <br />
            <a
              className="text-[#1a1b1d] relative before:content-[''] before:block before:h-[3px] before:w-full before:bg-[#1a1b1d] before:absolute before:bottom-0"
              href="mailto:new@idaproject.com"
            >
              new@idaproject.com
            </a>
          </p>
          <ul className="text-[1.2rem] tracking-[-.012rem] uppercase font-medium text-[#1a1b1d] mt-[2rem] flex">
            {list.map((item, index) => (
              <li
                key={index}
                className="duration-300 h-[2.4rem] px-[.8rem] rounded-[100px] border border-[#e1e2e0] flex items-center hover:border-[#1a1b1d]"
              >
                <a href={item.href}>{item.text}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </LayoutModal>
  );
}
