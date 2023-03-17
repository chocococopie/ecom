// Sidebar.tsx
import React, { useContext } from "react";
import { UserContext } from "../context/UserContext";

const Sidebar: React.FC = () => {
  const { user, setUser } = useContext(UserContext)!;

  const handleToggleRole = () => {
    setUser({
      ...user,
      role: user.role === "Admin" ? "Editor" : "Admin",
    }); // toggle role
  };

  return (
    <>
      <p>Role: {user.role}</p>
      <button onClick={handleToggleRole}>Change Role</button>
    </>
  );
};

export default Sidebar;
