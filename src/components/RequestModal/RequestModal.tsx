import { LayoutModal, Button } from "@/components";

export default function RequestModal({
  activeModal,
  closeModal,
}: {
  activeModal: boolean;
  closeModal: (arg: boolean) => void;
}) {
  return (
    <LayoutModal active={activeModal} closeModal={closeModal}>
      <div className="flex flex-col h-full">
        <h3 className="text-[1.6rem] text-[#1a1b1d] font-medium tracking-[-.016rem] leading-[1.2] mb-[2rem]">
          оставьте заявку <br />и с вами свяжется менеджер
        </h3>
        <form action="#" className="flex flex-col gap-[1.6rem] flex-auto">
          <div className="flex flex-col gap-[1.6rem]">
            <label className="flex flex-col gap-[1.6rem] text-[#929298] text-[1.2rem] tracking-[-.012rem]">
              имя
              <input
                type="text"
                placeholder="Сергей"
                className="text-[2.7rem] tracking-[-.032rem] font-medium text-[#1a1b1d] leading-[1.15] border-b border-[#e1e2e0] focus:outline-none placeholder:text-[#e1e2e0]"
              />
            </label>
            <label className="flex flex-col gap-[1.6rem] text-[#929298] text-[1.2rem] tracking-[-.012rem]">
              номер телефона
              <input
                type="tel"
                placeholder="+7 xxx xxx xx xx"
                className="text-[2.7rem] tracking-[-.032rem] font-medium text-[#1a1b1d] leading-[1.15] border-b border-[#e1e2e0] focus:outline-none placeholder:text-[#e1e2e0]"
              />
            </label>
            <label className="flex flex-col gap-[1.6rem] text-[#929298] text-[1.2rem] tracking-[-.012rem]">
              e-mail
              <input
                type="email"
                placeholder="s.gordeev@pik.ru"
                className="text-[2.7rem] tracking-[-.032rem] font-medium text-[#1a1b1d] leading-[1.15] border-b border-[#e1e2e0] focus:outline-none placeholder:text-[#e1e2e0]"
              />
            </label>
            <label className="flex flex-col gap-[1.6rem] text-[#929298] text-[1.2rem] tracking-[-.012rem]">
              название компании
              <input
                type="text"
                placeholder="пик"
                className="text-[2.7rem] tracking-[-.032rem] font-medium text-[#1a1b1d] leading-[1.15] border-b border-[#e1e2e0] focus:outline-none placeholder:text-[#e1e2e0]"
              />
            </label>
            <label className="flex flex-col gap-[1.6rem] text-[#929298] text-[1.2rem] tracking-[-.012rem]">
              комментарий
              <input
                type="text"
                placeholder="если есть, что добавить"
                className="text-[2.7rem] tracking-[-.032rem] font-medium text-[#1a1b1d] leading-[1.15] border-b border-[#e1e2e0] focus:outline-none placeholder:text-[#e1e2e0]"
              />
            </label>
          </div>
          <div className="mt-auto flex justify-between">
            <p className="text-[#929298] text-[1.2rem] tracking-[-.012rem]">
              Нажимая кнопку, вы подтверждаете свое согласие <br />
              <a href="#" className="text-[#1a1b1d]">
                на обработку персональных данных
              </a>
            </p>
            <Button text="отправить" />
          </div>
        </form>
      </div>
    </LayoutModal>
  );
}
