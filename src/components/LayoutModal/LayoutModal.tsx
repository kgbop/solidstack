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
        "fixed top-0 w-full h-full bg-[rgba(0,0,0,0.40)] overflow-auto duration-200 min-w-[375px] z-30",
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
            className="absolute top-4 right-4"
            onClick={() => {
              closeModal && closeModal(false);
              document.body.classList.remove("lock");
            }}
          >
            <svg
              width="19"
              height="19"
              viewBox="0 0 19 19"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M13.33 14.601L9.43241 10.685L5.41014 14.6884L4.10508 13.3772L8.12735 9.3738L4.24743 5.47557L5.55866 4.1705L9.43857 8.06874L13.4963 4.0301L14.8013 5.34133L10.7436 9.37997L14.6412 13.2959L13.33 14.601Z"
                fill="#1a1b1d"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default LayoutModal;
