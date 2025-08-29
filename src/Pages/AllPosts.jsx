// src/pages/AllPosts.jsx
import React, { useEffect, useState } from "react";
import BlogCard from "../Components/BlogCard";
import { getAllPosts } from "../utils/storage";

export default function AllPosts() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    setPosts(getAllPosts());
  }, []);

  return (
    <div className="max-w-6xl mx-auto">
      <h1 className="text-3xl font-bold mb-6 text-gray-800">All Blog Posts</h1>

      {posts.length === 0 ? (
        <p className="text-gray-600 text-center">No posts available yet.</p>
      ) : (
        <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 animate-fadeIn">
          {posts
            .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
            .map((post) => <BlogCard key={post.id} post={post} />)}
        </div>
      )}
    </div>
  );
}
