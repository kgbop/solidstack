"use client";

import { CSSTransition } from "react-transition-group";

const Transition = ({
  children,
  active,
}: {
  children: any;
  active: boolean;
}) => {
  return (
    <CSSTransition
      in={active}
      timeout={1000}
      classNames="animation-modal"
      mountOnEnter
      unmountOnExit
    >
      {children}
    </CSSTransition>
  );
};

export default Transition;
