import styles from "./postUser.module.css";
import Image from "next/image";
import { getUser } from "@/app/lib/data";

// const getUser = async (userId: number) => {
//   const res = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}` ,{cache:"no-store"});

//   if (!res.ok) {
//     console.log("error post user");
//   }

//   return res.json();
// };

const PostUser = async ({ userId } : any) => {

  const user = await getUser(userId);
  console.log(user);


  return (
    <div className={styles.container}>
      <Image
        className={styles.avatar}
        src={"/noavatar.png"}
        alt=""
        width={50}
        height={50}
      />
      {user && <div className={styles.texts}>
        <span className={styles.title}>Author</span>
        <span className={styles.username}>{user.username}</span>
      </div>}
    </div>
  );
};

export default PostUser;