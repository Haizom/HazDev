import Image from "next/image"
import styles from "./postCard.module.css"
import Link from "next/link"
import React from "react"

const PostCard = ({blog} : any) => {
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <div className={styles.imgContainer}>
          <Image src='/about.png' alt="" fill className={styles.img}/>
        </div>
        <span className={styles.date}>{blog.createdAt.toString().slice(4, 16)}</span>
      </div>
      <div className={styles.bottom}>
        <h1 className={styles.title}>{blog.title}</h1>
        <p className={styles.desc}>{blog.body}</p>
        <Link className={styles.link} href={`/blog/${blog.slug}`}>READ MORE</Link>
      </div>
    </div>
  )
}

export default PostCard