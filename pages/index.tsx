import NavBarComponent from "../Components/Nav/NavBarComponent"
import styles from "../styles/Home.module.css"
import FeaturedPostsComponent from "../Components/FeaturedPostsComponent"
export default function Home() {
  return (
    <div className="container">
      <NavBarComponent />

      <div className={styles.app__body}>
        <FeaturedPostsComponent/>
      </div>
    </div>
  )
}
