import React, { useState } from "react";
import { marked } from "marked";
import { useNavigate } from "react-router-dom";
import { savePost } from "../utils/storage";

export default function CreatePost() {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [content, setContent] = useState("");
  const navigate = useNavigate();

  const handleSave = () => {
    if (!title.trim() || !content.trim()) {
      alert("Title and content are required.");
      return;
    }

    const newPost = {
      id: Date.now().toString(),
      title,
      author: author.trim() || "Anonymous", // ✅ default to Anonymous
      content,
      createdAt: new Date().toISOString(),
    };

    savePost(newPost);
    navigate(`/post/${newPost.id}`);
  };

  return (
    <div className="grid md:grid-cols-2 gap-6">
      {/* Editor */}
      <div>
        <h2 className="text-lg font-semibold mb-2">Write Blog</h2>

        <input
          type="text"
          placeholder="Post Title"
          className="w-full p-2 border rounded mb-3"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <input
          type="text"
          placeholder="Author Name (optional)"
          className="w-full p-2 border rounded mb-3"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
        />

        <textarea
          className="w-full h-72 p-2 border rounded"
          placeholder="Write your markdown here..."
          value={content}
          onChange={(e) => setContent(e.target.value)}
        ></textarea>

        <button
          onClick={handleSave}
          className="mt-3 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
        >
          Publish
        </button>
      </div>

      {/* Preview */}
      <div>
        <h2 className="text-lg font-semibold mb-2">Live Preview</h2>
        <div
          className="prose prose-blue max-w-none border p-4 rounded bg-white h-96 overflow-auto"
          dangerouslySetInnerHTML={{ __html: marked(content) }}
        />
      </div>
    </div>
  );
}
