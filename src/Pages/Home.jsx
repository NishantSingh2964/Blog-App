// src/pages/Home.jsx
import React, { useEffect, useState } from "react";
import BlogCard from "../Components/BlogCard";
import { getAllPosts } from "../utils/storage";
import { Link } from "react-router-dom";
 

export default function Home() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const storedPosts = getAllPosts();
    setPosts(storedPosts);
  }, []);

  const latestPosts = posts
    .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
    .slice(0, 3);

  return (
    <div>
      <section className="bg-gradient-to-r from-blue-500 to-purple-600 text-white p-10 rounded-xl shadow mb-10 text-center">
        <h1 className="text-4xl font-bold mb-2">Welcome to Markdown Blog</h1>
        <p className="text-lg opacity-90">Write. Preview. Publish. All with Markdown.</p>
      </section>

      <section className="max-w-6xl mx-auto">
        <h2 className="text-2xl font-semibold mb-6 text-gray-800">Latest Posts</h2>

        {latestPosts.length === 0 ? (
          <p className="text-gray-600 text-center">No blog posts found. Create one!</p>
        ) : (
          <>
            <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
              {latestPosts.map((post) => (
                <BlogCard key={post.id} post={post} />
              ))}
            </div>
            <div className="text-center mt-8">
              <Link
                to="/all-posts"
                className="inline-block px-6 py-2 bg-blue-600 text-white font-medium rounded hover:bg-blue-700 transition"
              >
                View All Posts
              </Link>
            </div>
          </>
        )}
      </section>
    </div>
  );
}
