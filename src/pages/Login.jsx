import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Login({ setUser }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    if (email && password) {
      setUser({ email });
      alert("Logged in successfully!");
      navigate("/"); // redirect to home after login
    } else {
      alert("Please enter email and password");
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Login</h1>
      <form
        onSubmit={handleLogin}
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "10px",
          maxWidth: "300px"
        }}
      >
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
        <button
          type="submit"
          style={{
            padding: "10px",
            background: "#1976d2",
            color: "#fff",
            border: "none",
            borderRadius: "5px"
          }}
        >
          Login
        </button>
      </form>

      <p style={{ marginTop: "15px" }}>
        Don’t have an account?{" "}
        <Link to="/signup" style={{ color: "#1976d2", textDecoration: "underline" }}>
          Sign Up
        </Link>
      </p>
    </div>
  );
}
