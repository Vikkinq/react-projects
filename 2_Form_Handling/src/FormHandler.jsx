import { useState } from "react";

export default function FormHandler() {
  const [name, setName] = useState("Tae");

  const handleChange = (event) => {
    setName(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(name);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h4>Input: {name}</h4>
        <label htmlFor="name">Enter Name: </label>
        <input onChange={handleChange} type="text" name="name" id="name" placeholder="enter name" value={name} />

        <br />
        <button>Submit</button>
      </form>
    </div>
  );
}
