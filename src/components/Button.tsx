import React from "react";

// 1. Define props interface
interface ButtonProps {
  label: string;
  onClick: () => void;
}

// 2. Create functional component
const Button: React.FC<ButtonProps> = ({ label, onClick }) => {
  return (
    <button
      onClick={onClick}
      style={{
        padding: "10px 20px",
        backgroundColor: "pink",
        color: "white",
        border: "none",
        borderRadius: "5px",
        cursor: "pointer",
        fontSize: "16px",
      }}
    >
      {label}
    </button>
  );
};

export default Button;
