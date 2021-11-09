import React from 'react'
import st from './TodoItem.module.css'

export default function TodoItem(props) {
  const onDoneChange = (e) => {
    props.changeDone(props.currentUser, props.id, e.target.checked)
  }
    return (
        <label className={st.label}>
          <input type="checkbox" defaultChecked={props.done} onChange={onDoneChange}></input>
          {props.todo}
        </label>
    );
}
