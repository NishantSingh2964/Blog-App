// src/components/BlogCard.jsx
import React from "react";
import { Link } from "react-router-dom";

export default function BlogCard({ post }) {
  const formattedDate = new Date(post.createdAt).toLocaleDateString();

  return (
    <div className="bg-white border border-gray-200 rounded-xl shadow hover:shadow-lg transition-shadow duration-300 overflow-hidden flex flex-col">
      <div className="p-5 flex-1 flex flex-col">
        <h2 className="text-xl font-bold text-blue-700 mb-2 hover:underline">
          <Link to={`/post/${post.id}`}>{post.title}</Link>
        </h2>
        <p className="text-sm text-gray-500 mb-4">
          By <span className="font-semibold">{post.author}</span> <br /> on {new Date(post.createdAt).toLocaleString()}
        </p>

        <p className="text-gray-700 line-clamp-3 flex-grow">
          {post.content.slice(0, 200)}...
        </p>
      </div>

      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white text-center py-2 font-medium hover:brightness-110 transition">
        <Link to={`/post/${post.id}`} className="block w-full">
          Read More →
        </Link>
      </div>
    </div>
  );
}
