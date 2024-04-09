import { LayoutModal, Button, Input } from "@/components";

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
            <Input text="имя" type="text" placeholder="Сергей" />
            <Input
              text="номер телефона"
              type="tel"
              placeholder="+7 xxx xxx xx xx"
            />
            <Input text="e-mail" type="email" placeholder="s.gordeev@pik.ru" />
            <Input text="название компании" type="text" placeholder="пик" />
            <Input
              text="комментарий"
              type="text"
              placeholder="если есть, что добавить"
            />
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
