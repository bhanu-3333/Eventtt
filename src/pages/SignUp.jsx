import React, { useState } from "react";

export default function SignUp({ setUser }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignUp = (e) => {
    e.preventDefault();
    if (email && password) {
      setUser({ email });
      alert("Account created successfully!");
    } else {
      alert("Please fill all fields");
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Sign Up</h1>
      <form onSubmit={handleSignUp} style={{ display: "flex", flexDirection: "column", gap: "10px", maxWidth: "300px" }}>
        <input 
          type="email" 
          placeholder="Email" 
          value={email} 
          onChange={(e) => setEmail(e.target.value)} 
          required 
        />
        <input 
          type="password" 
          placeholder="Password" 
          value={password} 
          onChange={(e) => setPassword(e.target.value)} 
          required 
        />
        <button type="submit" style={{ padding: "10px", background: "#1976d2", color: "#fff", border: "none", borderRadius: "5px" }}>
          Sign Up
        </button>
      </form>
    </div>
  );
}
