import PostCard from "../Components/PostCard/PostCard"
import styles from "./blog.module.css";
// import { getPosts } from "../lib/data";

const getBlogs = async () => {
  const response = await fetch("http://localhost:3000/api/blogs")
  .then(res=> res.json())
  return response;
}

// export interface Blog {
//   userId: number
//   id:number
//   title: string
//   body: string
// }

export const metadata = {
  title: "Blogs",
  description: "We create digital ideas that are bigger, bolder, braver and better.",
};

const BlogPage = async () => {

  const blogs = await getBlogs()

  return (
    <div className={styles.container}>
      {blogs?.map((blog: any) => (
        <div className={styles.post} key={blog.id}>
          <PostCard blog={blog}  />
        </div>
      ))}
    </div>
  );
};

export default BlogPage;