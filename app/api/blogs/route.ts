import { Post } from "@/app/lib/models";
import { connectToDb } from "@/app/lib/utils";
import { NextResponse } from "next/server";

export const GET = async () => {
    try {
        await connectToDb()
        const posts = await Post.find();
        return NextResponse.json(posts)
      } catch (error) {
        console.error('Error fetching posts:', error);
      }
}