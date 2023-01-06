import React from "react"
import styles from "../../styles/LoginSignupForm.module.css"
import Link from "next/link"
import axios from "axios"
import { useAppDispatch } from "../../redux/hooks"
import { login } from "../../redux/user/userSlice"
import { useRouter } from "next/router"

interface Props {
  formHeading: string,
  formSubHeading: string,
  formLinkMsg: string,
  formType: string
}

const LoginSignUpForm: React.FunctionComponent<Props> = ({ formHeading, formSubHeading, formLinkMsg, formType }) => {
  const dispatch = useAppDispatch()
  const router = useRouter()

  const [username, setUsername] = React.useState<string>("")
  const [password, setPassword] = React.useState<string>("")
  const [email, setEmail] = React.useState<string>("")
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (formType === "login") {
      axios.post("/api/auth/login", { email, password }).then(res => {
        dispatch(login({ userId: res.data.user?.uid, email: res.data.user?.email }))
        router.push("/")
      })

      return
    }

    if (formType === "signup") {
      axios.post("/api/auth/signup", { username, password, email }).then(res => {
        dispatch(login({ userId: res.data.user?.uid, email: res.data.user?.email }))
        router.push("/")
      })

      return
    }

    throw new Error("Form type not supported")
  }

  return (
    <form className={`form box__shadow ${styles.login__form}`} onSubmit={(e) => onSubmit(e)}>
      <div className={styles.form__heading__container}>
        <h1 className={styles.page__title}>{formHeading}</h1>
        <p className={styles.page__subheading}>
          {formSubHeading}
        </p>
      </div>

      <div className={`form__group  ${styles.login__form__group}`}>
        <label htmlFor="email" className={styles.form__label}>Email</label>
        <input className={`form__input box__shadow ${styles.login__form__input}`} type="text"
               placeholder="Email..." value={email} onChange={(e) => setEmail(e.target.value)}
        />
      </div>

      <div className={`form__group  ${styles.login__form__group}`}>
        <label htmlFor="password" className={styles.form__label}>Password</label>
        <input className={`form__input box__shadow ${styles.login__form__input}`} type="password"
               placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)}
        />

        <button type={"submit"} className={`btn ${styles.login__btn}`}>Login</button>
      </div>

      <p className={styles.signUp__link}>{formLinkMsg} <Link className={styles.signUp__ref}
                                                             href={"/signup"}>here</Link></p>
    </form>)

}

export default LoginSignUpForm