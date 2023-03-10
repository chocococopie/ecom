// Blog.tsx
import React from "react";
import Post from "./Post";

type Theme = "light" | "dark";

interface BlogProps {
  theme: Theme;
}

const Blog: React.FC<BlogProps> = ({ theme }) => {
  return (
    <>
      <Post theme={theme} />
      <Post theme={theme} />
      <Post theme={theme} />
    </>
  );
};

export default Blog;
