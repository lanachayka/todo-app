import React from "react";
import st from "./Modal.module.css";

export default function Modal({ active, setActive, children }) {
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
