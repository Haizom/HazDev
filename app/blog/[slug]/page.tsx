import Image from "next/image";
import styles from "./singlePost.module.css";



const SinglePostPage = async ({ params } : any) => {
  const { slug } = params;


  return (
    <div className={styles.container}>

      <div className={styles.imgContainer}>
          <Image src='/contact.png' alt="" fill className={styles.img} />
      </div>

      <div className={styles.textContainer}>
        <h1 className={styles.title}>title</h1>
        <div className={styles.detail}>
          
          <div className={styles.detailText}>
            <span className={styles.detailTitle}>Published</span>
            <span className={styles.detailValue}>
              11.09.1998
            </span>
          </div>
        </div>
        <div className={styles.content}>{slug}</div>
      </div>
    </div>
  );
};

export default SinglePostPage;