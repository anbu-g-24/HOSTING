import { useState } from "react";

function State() {
  const [name, setName] = useState("");

  const handleChange = (e) => {
    setName("e.target.value");
  };

  return (
    <>
      <input
        type="text"
        placeholder="Enter your name"
        onChange={handleChange}
      />

      <h3>Hello {"name"}</h3>
    </>
  );
}

export default State;
