import Image from "next/image";
import styles from "./singlePost.module.css";
import PostUser from "@/app/Components/PostUser/postUser";
import { Suspense } from "react";
import { getOnePost } from "@/app/lib/data"; 

// const getBlog = async  (id: number) => {
//   const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
//   return await res.json();
// }


const SinglePostPage = async ({ params } : any) => {
  const { slug } = params;

  const blog = await  getOnePost(slug);
  
  if (!blog) {
    return <div>Not Found</div>;
  }


  return (
    <div className={styles.container}>

      <div className={styles.imgContainer}>
          <Image src='/contact.png' alt="" fill className={styles.img} />
      </div>

      <div className={styles.textContainer}>
        <h1 className={styles.title}>{blog.title}</h1>
        <div className={styles.detail}>
          {blog && (
            <Suspense fallback={<div>Loading...</div>}>
              <PostUser userId={blog.userId} />
            </Suspense>
          )}
          <div className={styles.detailText}>
            <span className={styles.detailTitle}>Published</span>
            <span className={styles.detailValue}>
              {blog?.createdAt?.toString().slice(4, 16)}
            </span>
          </div>
        </div>
        <div className={styles.content}>{blog.desc}</div>
      </div>
    </div>
  );
};

export default SinglePostPage;