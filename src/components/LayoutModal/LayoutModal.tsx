import classNames from "classnames";

const LayoutModal = ({
  children,
  closeModal,
  active,
}: {
  children: JSX.Element;
  closeModal?: (arg: boolean) => void;
  active?: boolean;
}) => {
  return (
    <div
      className={classNames(
        "fixed top-0 w-full h-full bg-[rgba(0,0,0,0.40)] overflow-auto duration-200 min-w-[375px] z-20",
        active ? "visible opacity-100" : "invisible opacity-0"
      )}
      onClick={() => {
        closeModal && closeModal(false);
        document.body.classList.remove("lock");
      }}
    >
      <div className="py-5 flex justify-end min-h-full sm:px-4">
        <div
          className="bg-[white] px-10 p-[2rem] w-[55rem] relative"
          onClick={(e) => e.stopPropagation()}
        >
          {children}
          <button
            className="absolute top-1 right-3"
            onClick={() => {
              closeModal && closeModal(false);
              document.body.classList.remove("lock");
            }}
          >
            x
          </button>
        </div>
      </div>
    </div>
  );
};

export default LayoutModal;
