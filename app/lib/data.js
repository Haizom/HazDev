import mongoose from 'mongoose';
import { User, Post } from './models.js';
import { connectToDb } from './utils.js'

export const getPosts = async () => {
    await connectToDb()
    try {
        const posts = await Post.find();
        return posts
      } catch (error) {
        console.error('Error fetching posts:', error);
      }
    };

export const getOnePost = async (slug) => {
    await connectToDb()
    try {
        const post = await Post.findOne({ slug : slug})
        return post
      } catch (error) {
        console.error('Error fetching a post:', error);
      }
    };

export const getUser = async (id) => {
    await connectToDb()
    if (!mongoose.isValidObjectId(id)) {
      console.log('Invalid user ID format');
    }
    try {
        const user = await User.findById(id);
        return user
      } catch (error) {
        console.error('Error fetching a user:');
      }
    };
  