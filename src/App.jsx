
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./Pages/Home";
import CreatePost from "./Pages/CreatePost";
import ViewPost from "./Pages/ViewPost";
import AllPosts from "./Pages/AllPosts";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import EditPost from "./Pages/EditPost";

export default function App() {
  return (
    <Router>
      {/* App wrapper with background image */}
      <div
        className="min-h-screen flex flex-col bg-fixed bg-center bg-no-repeat bg-cover"
        style={{
          backgroundImage: "url('/background.png')", // ✅ Replace with your actual image name in /public
        }}
      >
        {/* Navbar at top */}
        <Navbar />

        {/* Main content area with blur + white overlay */}
        <main className="flex-grow p-4 max-w-5xl mx-auto backdrop-blur-sm bg-white/70 rounded-xl shadow-lg mt-6">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/create" element={<CreatePost />} />
            <Route path="/editpost/:id" element={<EditPost />} />
            <Route path="/post/:id" element={<ViewPost />} />
            <Route path="/all-posts" element={<AllPosts />} />
          </Routes>
        </main>

        {/* Footer at bottom */}
        <Footer />
      </div>
    </Router>
  );
}
