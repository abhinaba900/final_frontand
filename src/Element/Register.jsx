import React, { useState } from "react";
import axios from "axios";
function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [gender, setGender] = useState("");

  const handleSubmit = async () => {
    try {
      const response = await axios.post(
        "https://vast-pear-barnacle-toga.cyclic.app/users/register",
        {
          name,
          email,
          gender,
          password,
        },
        {
          withCredentials: true,
        }
      );
      console.log(response.data);
      if (response.data) {
        alert("Registered successfully");
      }
    } catch (error) {
      alert(error.response.data.message);
      console.log(error);
    }
  };
  console.log(email, password, name, gender);
  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleSubmit();
        }}
      >
        <input
          type="text"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <select
          name="gender"
          id="gender"
          value={gender}
          onChange={(e) => setGender(e.target.value)}
        >
          <option value="-">Select Gender</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="other">Other</option>
        </select>
        <input
          type="password"
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Register</button>
      </form>
    </div>
  );
}

export default Register;
