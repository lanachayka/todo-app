import React from "react";
import st from "./SingUp.module.css";

export default function SingUp(props) {
  const inputRef = React.createRef();
  const onCheckUser = () => {
    const email = inputRef.current.value
    props.checkUser(email);
  };
  return (
    <div className={st.wrapper}>
      <h1 className={st.title}>Sign up</h1>
      <input
        ref={inputRef}
        className={st.input}
        type="text"
        placeholder="user1@example.com/user2@example.com"
      ></input>
      <button onClick={onCheckUser} className={st.btn}>
        Sign up
      </button>
    </div>
  );
}
