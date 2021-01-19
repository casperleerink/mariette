import React from "react"
import style from "./Form.module.scss"

function Form() {
  return (
    <form
      data-netlify="true"
      className={style.form}
      name="Contact Form"
      method="POST"
    >
      <input type="hidden" name="form-name" value="Contact Form" />
      <label>
        E-mail
        <input type="email" name="email" />
      </label>
      <label>
        Vraag of Opmerking
        <textarea name="message" rows="6" maxLength="10000" />
      </label>
      <button type="submit">Verzenden</button>
    </form>
  )
}

export default Form
