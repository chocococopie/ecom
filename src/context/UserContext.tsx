// UserContext.tsx
import React, { createContext, useState, ReactNode } from "react";

interface User {
  name: string;
  role: string;
}

interface UserContextType {
  user: User;
  setUser: React.Dispatch<React.SetStateAction<User>>;
}

export const UserContext = createContext<UserContextType | undefined>(undefined);

interface UserProviderProps {
  children: ReactNode;
}

export const UserProvider: React.FC<UserProviderProps> = ({ children }) => {
  const [user, setUser] = useState<User>({ name: "Diana", role: "Admin" });

  return <UserContext.Provider value={{ user, setUser }}>{children}</UserContext.Provider>;
};
