// Post.tsx
import React from "react";

type Theme = "light" | "dark";

interface PostProps {
  theme: Theme;
}

const Post: React.FC<PostProps> = ({ theme }) => {
  return (
    <div style={{ background: theme === "dark" ? "#333" : "#fff", color: theme === "dark" ? "#fff" : "#000" }}>
      <h2>My Blog Post</h2>
      <p>This is content...</p>
    </div>
  );
};

export default Post;
