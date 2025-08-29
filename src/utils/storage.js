const STORAGE_KEY = "markdown_blog_posts";

// Get all posts from localStorage
export function getAllPosts() {
  const data = localStorage.getItem(STORAGE_KEY);
  return data ? JSON.parse(data) : [];
}

// Get a single post by ID
export function getPostById(id) {
  const posts = getAllPosts();
  return posts.find((post) => post.id === id);
}

// Save a new post
export function savePost(newPost) {
  const posts = getAllPosts();
  posts.push(newPost);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(posts));
}

// Delete a post by ID
export function deletePostById(id) {
  const posts = getAllPosts().filter((post) => post.id !== id);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(posts));
}

// Update a post by ID
export function updatePostById(id, updatedData) {
  const posts = getAllPosts();
  const updatedPosts = posts.map((post) =>
    post.id === id ? { ...post, ...updatedData } : post
  );
  localStorage.setItem(STORAGE_KEY, JSON.stringify(updatedPosts));
}
