import styles from "./postUser.module.css";
import Image from "next/image";

const getUser = async (userId: number) => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}` ,{cache:"no-store"});

  if (!res.ok) {
    throw new Error("Something went wrong");
  }

  return res.json();
};

const PostUser = async ({ userId } : any) => {

  const user = await getUser(userId);


  return (
    <div className={styles.container}>
      <Image
        className={styles.avatar}
        src={"/noavatar.png"}
        alt=""
        width={50}
        height={50}
      />
      <div className={styles.texts}>
        <span className={styles.title}>Author</span>
        <span className={styles.username}>{user.username}</span>
      </div>
    </div>
  );
};

export default PostUser;