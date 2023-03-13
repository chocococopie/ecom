// Dashboard.tsx
import React from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";

const Dashboard: React.FC = () => {
  return (
    <div>
      <Header />
      <Sidebar />
      <p>Dashboard content</p>
    </div>
  );
};

export default Dashboard;
