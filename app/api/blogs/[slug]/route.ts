import { Post } from "@/app/lib/models";
import { connectToDb } from "@/app/lib/utils";
import { NextRequest, NextResponse } from "next/server";

export const GET = async (request: NextRequest, {params}: any) => {
    
    const slug = params;
    try {
        await connectToDb()
        const post = await Post.findOne(slug);
        return NextResponse.json(post)
      } catch (error) {
        console.error('Error fetching a post:', error);
      }
}