import Image from "next/image";
import styles from "./singlePost.module.css";
import PostUser from "@/app/Components/PostUser/postUser";
import { Suspense } from "react";
// import { getOnePost } from "@/app/lib/data"; 

const getBlog = async  (slug: string) => {
  const res = await fetch(`http://localhost:3000/api/blogs/${slug}`);
  return await res.json();
}

export const generateMetadata = async({params}: any) => {
  const { slug } = params;

  const blog = await getBlog(slug);

  return {
    title: blog.title,
    description: blog.desc
  }
};


const SinglePostPage = async ({ params } : any) => {
  const { slug } = params;

  const blog = await getBlog(slug);
  
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
              {blog?.createdAt?.toString().slice(0, 10)}
            </span>
          </div>
        </div>
        <div className={styles.content}>{blog.desc}</div>
      </div>
    </div>
  );
};

export default SinglePostPage;