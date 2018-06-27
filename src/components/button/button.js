import React, { Component } from 'react'
import css from './button.sass'

const Button = (props) => {
  return(
    <div className={css.buttonWrapper}>
      <input type="text" className={css.buttonInput} placeholder="type something" />
      <button className={css.button}>Yay! {props.children} </button>
    </div>
  )
}

export default Button
