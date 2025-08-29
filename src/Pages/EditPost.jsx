import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getPostById, updatePostById } from "../utils/storage";

export default function EditPost() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  useEffect(() => {
    const post = getPostById(id);
    if (post) {
      setTitle(post.title);
      setContent(post.content);
    } else {
      navigate("/all-posts"); // if post not found, redirect
    }
  }, [id, navigate]);

  const handleUpdate = (e) => {
    e.preventDefault();
    if (!title.trim() || !content.trim()) {
      alert("Title and content cannot be empty.");
      return;
    }

    updatePostById(id, { title, content });
    navigate(`/post/${id}`); // ✅ correct redirect after update
  };

  return (
    <div className="w-full px-4 sm:px-8 lg:px-20 py-10">
      <div className="w-full bg-white shadow-xl rounded-2xl p-10 border border-gray-200">
        <h1 className="text-3xl font-bold text-center mb-8 text-blue-700">
          ✏️ Edit Your Blog Post
        </h1>

        <form onSubmit={handleUpdate} className="space-y-8">
          <div>
            <label className="block text-base font-semibold text-gray-800 mb-1">
              Title
            </label>
            <input
              type="text"
              className="w-full border border-gray-300 rounded-lg p-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Enter your title"
              required
            />
          </div>

          <div>
            <label className="block text-base font-semibold text-gray-800 mb-1">
              Content
            </label>
            <textarea
              className="w-full border border-gray-300 rounded-lg p-3 text-gray-700 h-48 resize-none focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
              value={content}
              onChange={(e) => setContent(e.target.value)}
              placeholder="Write your blog content..."
              required
            />
          </div>

          <div className="text-center">
            <button
              type="submit"
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full text-lg font-semibold transition duration-200"
            >
              💾 Update Post
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
