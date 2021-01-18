import React from "react"
// import axios from "axios"
// import * as qs from "query-string"
import style from "./Form.module.scss"

function Form() {
  // const [feedbackMsg, setFeedbackMsg] = useState(null)
  // const formRef = useRef(null)
  // const fieldRefs = useRef({})

  // const handleSubmit = e => {
  //   e.preventDefault()
  //   const formData = {}
  //   Object.keys(fieldRefs.current).map(
  //     key => (formData[key] = fieldRefs.current[key].value)
  //   )
  //   const axiosOptions = {
  //     url: location.pathname,
  //     method: "post",
  //     headers: { "Content-Type": "application/x-www-form-urlencoded" },
  //     data: qs.stringify(formData),
  //   }
  //   axios(axiosOptions)
  //     .then(response => {
  //       fieldRefs.current["email"].value = ""
  //       fieldRefs.current["message"].value = ""
  //       setFeedbackMsg("Success!")
  //     })
  // 		.catch(err =>
  // 			console.log(err);
  //       setFeedbackMsg("Helaas is er iets fout gegaan tijdens het verzenden.")
  //     )
  // }
  return (
    <form
      className={style.form}
      name="contact"
      method="POST"
      data-netlify="true"
      action="/success"
    >
      <input type="hidden" name="form-name" value="contact" />
      <label>
        E-mail
        <input type="text" name="email" />
      </label>
      <label>
        Vraag of Opmerking
        <textarea name="message" />
      </label>
      <button type="submit">Verzenden</button>
    </form>
  )
}

export default Form
