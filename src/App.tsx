// import "./App.css";
// import React, { useEffect, useState } from "react";

// function App() {
//   const [users, setUsers] = useState([]); // state to store fetched data
//   const [loading, setLoading] = useState(true); // state for loading
//   const [error, setError] = useState(null); // state for error handling

//   useEffect(() => {
//     // define async function inside useEffect
//     const fetchUsers = async () => {
//       try {
//         setLoading(true); // start loading
//         const response = await fetch(
//           "https://jsonplaceholder.typicode.com/users"
//         );
//         if (!response.ok) {
//           throw new Error("Failed to fetch data");
//         }
//         const data = await response.json();
//         setUsers(data); // update state with fetched data
//       } catch (err) {
//         setError(err.message); // handle error
//       } finally {
//         setLoading(false); // stop loading
//       }
//     };

//     fetchUsers(); // call async function
//   }, []); // empty dependency → runs once on mount

//   if (loading) return <p>Loading...</p>;
//   if (error) return <p style={{ color: "red" }}>Error: {error}</p>;

//   return (
//     <div>
//       <h1>User List</h1>
//       <ul>
//         {users.map((user) => (
//           <li key={user.id}>
//             {user.name} – {user.email}
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// export default App;

// // App.js
// import React, { useState } from "react";
// import Navbar from "./Navbar";
// import Blog from "./Blog";

// function App() {
//   const [theme, setTheme] = useState("dark");

//   return (
//     <div>
//       <Navbar theme={theme} setTheme={setTheme} />
//       <Blog theme={theme} />
//     </div>
//   );
// }

// export default App;

// App.tsx
import React from "react";
import Button from "./components/Button";

const App: React.FC = () => {
  const handleClick = () => {
    alert("Button clicked!");
  };
  const handleSecondClick = () => {
    alert("Button Two clicked!");
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>My Button Component</h1>
      <Button label="Click Me" onClick={handleClick} />
      <h1>My Second Button Component</h1>
      <Button label="Yay" onClick={handleSecondClick} />
    </div>
  );
};

export default App;
