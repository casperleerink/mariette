import React, { useState, useRef } from "react"
import axios from "axios"
import * as qs from "query-string"
import style from "./Form.module.scss"

function Form({ location }) {
  console.log(location)
  const [feedbackMsg, setFeedbackMsg] = useState(null)
  const formRef = useRef(null)
  const fieldRefs = useRef({})

  const handleSubmit = e => {
    e.preventDefault()
    const formData = {}
    Object.keys(fieldRefs.current).map(
      key => (formData[key] = fieldRefs.current[key].value)
    )
    const axiosOptions = {
      url: location.pathname,
      method: "post",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      data: qs.stringify(formData),
    }
    axios(axiosOptions)
      .then(response => {
        fieldRefs.current["email"].value = ""
        fieldRefs.current["message"].value = ""
        setFeedbackMsg("Success!")
      })
      .catch(err =>
        setFeedbackMsg("Helaas is er iets fout gegaan tijdens het verzenden.")
      )
  }
  return (
    <>
      {feedbackMsg && (
        <p style={{ backgroundColor: "#F8E5DC", borderRadius: "0.5rem" }}>
          {feedbackMsg}
        </p>
      )}
      <form
        className={style.form}
        ref={formRef}
        name="Contact Form"
        method="POST"
        data-netlify="true"
        onSubmit={e => handleSubmit(e)}
      >
        <input
          ref={el => (fieldRefs.current["form-name"] = el)}
          type="hidden"
          name="form-name"
          value="Contact Form"
        />
        <label>
          E-mail
          <input
            ref={el => (fieldRefs.current["email"] = el)}
            type="text"
            name="email"
          />
        </label>
        <label>
          Vraag of Opmerking
          <textarea
            ref={el => (fieldRefs.current["message"] = el)}
            name="message"
          />
        </label>
        <button type="submit">Verzenden</button>
      </form>
    </>
  )
}

export default Form
