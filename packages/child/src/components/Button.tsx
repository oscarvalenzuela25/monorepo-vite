import { useState } from "react";

const Button = () => {
  const [first, setCount] = useState(0);

  return (
    <button
      onClick={() => setCount((prevState) => prevState + 1)}
      style={{
        backgroundColor: "blue",
      }}
    >
      counter of children: {first}
    </button>
  );
};

export default Button;
