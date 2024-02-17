import PostCard from "../Components/PostCard/PostCard"
import styles from "./blog.module.css";

const getBlogs = async  () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts")
  .then(res=> res.json())
  return response;
}

export interface Blog {
  userId: number
  id:number
  title: string
  body: string
}

const BlogPage = async () => {

  const blogs: Blog[] = await getBlogs()

  return (
    <div className={styles.container}>
      {blogs.map((blog) => (
        <div className={styles.post} key={blog.id}>
          <PostCard blog={blog}  />
        </div>
      ))}
    </div>
  );
};

export default BlogPage;