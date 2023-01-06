import React from "react"
import Image from "next/image"
import  styles  from "../styles/BlogCardComponent.module.css"

const BlogCardComponent: React.FunctionComponent = () => {
  return <div className={`box__shadow ${styles.container}`}>
    <Image
      className={styles.card__image}
      src={"https://cdn.dribbble.com/users/682206/screenshots/16850742/media/e6854478e016c5de80fa8389e8410325.png?compress=1&resize=1000x750&vertical=top"}
      alt={"image of landscape"}
      width={300}
      height={250}
    />
  </div>
}

export default BlogCardComponent