import { Post } from './models.js';
import { connectToDb } from './utils.js'

// const users = [
//     { username: 'user1', email: 'user1@example.com', password: 'strongPassword1' },
//     { username: 'user2', email: 'user2@example.com', password: 'strongPassword1' },
//     { username: 'user3', email: 'user3@example.com', password: 'strongPassword1' },
    
//   ];
  
  const posts = [
    { title: 'First Post', desc: 'This is my first post content', img: '', userId: '65d09555649a683009612d49', slug: "first-post" },
    {
      title: "Exploring the Latest AI Developments",
      desc: "From chatbots to self-driving cars, AI is rapidly transforming our world. In this post, I'll delve into some of the most exciting recent advancements in AI and their potential impact on various industries.",
      img: '',
      userId: '65d0955649a683009612d49',
      slug: "exploring-ai" 
    },
    {
      title: "5 Must-Have Apps for Programmers",
      desc: "As a programmer, having the right tools can make a big difference in your productivity and workflow. In this post, I'll share 5 essential apps that I use daily to enhance my coding experience.",
      img: '',
      userId: '65d0955649a683009612d49',
      slug: "apps-programers" 
    }
    
  ];

const seedUsersToDB = async () => {
    await connectToDb()
    try {
        await Post.deleteMany({}); 
        await Post.insertMany(posts);
        console.log('posts seeded successfully');
    
        // Ensure user IDs exist before seeding posts
        const seededUsers = await Post.find();
        console.log(seededUsers);
    
        // await Post.deleteMany({}); // Clear existing posts if desired
        // await Post.insertMany(posts.map(post => ({ ...post, userId: seededUsers.find(user => user.username === post.userId)._id })));
        // console.log('Posts seeded successfully');
    
        process.exit(0); // Exit process after successful seeding
      } catch (error) {
        console.error('Error seeding database:', error);
        process.exit(1); // Exit process with error code
      }
    };

seedUsersToDB()
    
