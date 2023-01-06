import React from "react"
import styles from "../../styles/NavBarComponent.module.css"

const NavBarComponent: React.FunctionComponent = () => {
  return <div className={styles.container}>
    <h1 className={styles.title}>Creative Space</h1>

    <div className={styles.search__container}>
      <input className={`form__group box__shadow ${styles.search__input}`} type="text" placeholder="Search spaces" />
    </div>
  </div>
}

export default NavBarComponent