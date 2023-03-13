// App.tsx
import React from "react";
import { UserProvider } from "./context/UserContext";
import Dashboard from "./components/Dashboard";

const App: React.FC = () => {
  return (
    <UserProvider>
      <Dashboard />
    </UserProvider>
  );
};

export default App;
