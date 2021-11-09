import React from 'react'
import st from './TodoItem.module.css'

export default function TodoItem(props) {
    return (
        <label className={st.label}>
          <input type="checkbox"></input>
          {props.todo}
        </label>
    );
}
