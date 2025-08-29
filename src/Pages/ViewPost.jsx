import React, { useEffect, useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { marked } from "marked";
import { getPostById, deletePostById } from "../utils/storage";

export default function ViewPost() {
  const { id } = useParams();
  const [post, setPost] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchedPost = getPostById(id);
    setPost(fetchedPost);
  }, [id]);

  const handleDelete = () => {
    const confirmed = window.confirm("Are you sure you want to delete this post?");
    if (confirmed) {
      deletePostById(id);
      navigate("/all-posts"); // ✅ redirect to posts list after delete
    }
  };

  if (!post) {
    return (
      <div className="text-center mt-10">
        <h2 className="text-xl font-bold mb-4">Post Not Found</h2>
        <Link to="/" className="text-blue-600 underline">
          Go back to Home
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto bg-white p-6 rounded shadow-md">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-3xl font-bold">{post.title}</h1>
        <div className="space-x-2">
          <Link
            to={`/editpost/${post.id}`}
            className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-1 rounded"
          >
            Edit
          </Link>

          <button
            onClick={handleDelete}
            className="bg-red-500 hover:bg-red-600 text-white px-4 py-1 rounded"
          >
            Delete
          </button>
        </div>
      </div>

      <p className="text-sm text-gray-500 mb-4">
        Published on {new Date(post.createdAt).toLocaleString()}
      </p>
      <p className="text-sm text-gray-500 mb-4">
        By <span className="font-semibold">{post.author}</span>
      </p>

      <div
        className="prose max-w-none"
        dangerouslySetInnerHTML={{ __html: marked(post.content) }}
      />
    </div>
  );
}
