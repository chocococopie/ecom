// App.tsx
import React, { useState } from "react";
// import Navbar from "./Navbar";
import Blog from "./components/Blog";

type Theme = "light" | "dark";

const App: React.FC = () => {
  const [theme, setTheme] = useState<Theme>("dark");

  return (
    <div>
      {/* <Navbar theme={theme} setTheme={setTheme} /> */}
      <Blog theme={theme} />
    </div>
  );
};

export default App;
