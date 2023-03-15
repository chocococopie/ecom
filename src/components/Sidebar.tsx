// Sidebar.tsx
import React, { useContext } from "react";
import { UserContext } from "../context/UserContext";

const Sidebar: React.FC = () => {
  const { user, setUser } = useContext(UserContext)!;

  const handleChangeRole = () => {
    setUser({ ...user, role: "Editor" }); // update role
  };

  return (
    <>
      <p>Role: {user.role}</p>
      <button onClick={handleChangeRole}>Change Role</button>
    </>
  );
};

export default Sidebar;
