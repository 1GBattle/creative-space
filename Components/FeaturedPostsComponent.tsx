import React from "react"
import styles from "../styles/FeaturedPostsComponent.module.css"
import BlogCardComponent from "./BlogCardComponent"

const FeaturedPostsComponent: React.FunctionComponent = () => {
  return <div className={styles.container}>
    <h1 className={styles.title}>Trending Spaces</h1>

    <div className={styles.cards__container}>
      <BlogCardComponent/>
      <BlogCardComponent/>
      <BlogCardComponent/>
      <BlogCardComponent/>
    </div>
  </div>
}

export default FeaturedPostsComponent