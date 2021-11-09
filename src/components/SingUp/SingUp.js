import React, { useState } from "react";
import st from "./SingUp.module.css";

export default function SingUp(props) {
  const [errorText, setErrorText] = useState("");
  const inputRef = React.createRef();
  const onCheckUser = () => {
    const email = inputRef.current.value
    props.checkUser(email);
    if (props.currentUser.length === 0) {
      setErrorText('Something does not look right. Please check the email and try again')
    }
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
      <p className={st.errorText}>{errorText}</p>
      <button onClick={onCheckUser} className={st.btn}>
        Sign up
      </button>
    </div>
  );
}
