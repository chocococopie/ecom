// Header.tsx
import React, { useContext } from "react";
import { UserContext } from "../context/UserContext";

const Header: React.FC = () => {
  const context = useContext(UserContext);
  if (!context) throw new Error("UserContext not found");
  const { user } = context;

  return <h1>Welcome, {user.role}!</h1>;
};

export default Header;
