import React from "react"
import styles from "../styles/LoginPage.module.css"
import axios from "axios"
import Link from "next/link"

const Login: React.FunctionComponent = () => {
  const [username, setUsername] = React.useState<string>("")
  const [password, setPassword] = React.useState<string>("")
  const [email, setEmail] = React.useState<string>("")

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    axios.post('/api/auth/login', { password, email }).then((res) => {
      console.log(res)
    })
  }
  return <div className={styles.page__container}>
    <div className={styles.form__container}>
      <form className={`form box__shadow ${styles.login__form}`} onSubmit={(e) => onSubmit(e)}>
        <div className={styles.form__heading__container}>
          <h1 className={styles.page__title}>Welcome back!</h1>
          <p className={styles.page__subheading}>
            Log in to your account to continue
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

        <p className={styles.signUp__link}>New here? Click <Link className={styles.signUp__ref}
                                                                 href={"/signup"}>here</Link></p>
      </form>


    </div>
  </div>
}

export default Login