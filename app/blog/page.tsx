import PostCard from "../Components/PostCard/PostCard"
import styles from "./blog.module.css";


const BlogPage = async () => {


  return (
    <div className={styles.container}>
      {[1,2,0].map((post) => (
        <div className={styles.post} key={post}>
          <PostCard  />
        </div>
      ))}
    </div>
  );
};

export default BlogPage;