import React from "react";
import st from "./Modal.module.css";

type ModalProps = {
  active: boolean,
  setActive: (active: boolean) => void,
  children: React.ReactNode
}

const Modal: React.FC<ModalProps> = ({ active, setActive, children }) => {
  return (
    <div
      className={active ? `${st.modal} ${st.active}` : st.modal}
      onClick={() => setActive(false)}
    >
      <div
        className={st.content}
        onClick={(e) => e.stopPropagation()}
      >
        {children}
      </div>
    </div>
  );
}

export default Modal
