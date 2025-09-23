"use client";
import { useState } from "react";

export default function Page() {
  const [input, setInput] = useState({
    username: "",
    password: "",
    email: ""
  });

  const [err, setErr] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;

    setInput((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const validation = () => {
    const error = {};

    if (!input.username.trim()) {
      error.username = "Username is required!";
    }

    if (!input.email.trim()) {
      error.email = "Email is required!";
    } else if (!input.email.includes("@")) {
      error.email = "Please include @ in the email.";
    }

    if (!input.password) {
      error.password = "Password is required!";
    } else if (input.password.length < 6) {
      error.password = "Password should be more than 6 characters.";
    }

    setErr(error);
    return Object.keys(error).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validation()) {
      const payload = {
        username: input.username,
        email: input.email,
        password: input.password
      };

      console.log("Payload:", payload);

      setInput({
        username: "",
        password: "",
        email: ""
      });

      setErr({});
    }
  };

  return (
    <div className="text-center min-h-screen flex items-center justify-center bg-gray-100">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-4 bg-white p-8 rounded shadow-md w-full max-w-sm"
      >
        <div className="text-left">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            name="username"
            placeholder="Enter Username"
            value={input.username}
            onChange={handleChange}
            className="border border-gray-300 px-4 py-2 rounded w-full"
          />
          {err.username && <p className="text-red-500 text-sm mt-1">{err.username}</p>}
        </div>

        <div className="text-left">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Enter Email"
            value={input.email}
            onChange={handleChange}
            className="border border-gray-300 px-4 py-2 rounded w-full"
          />
          {err.email && <p className="text-red-500 text-sm mt-1">{err.email}</p>}
        </div>

        <div className="text-left">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Enter Password"
            value={input.password}
            onChange={handleChange}
            className="border border-gray-300 px-4 py-2 rounded w-full"
          />
          {err.password && <p className="text-red-500 text-sm mt-1">{err.password}</p>}
        </div>

        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
        >
          Submit Form
        </button>
      </form>
    </div>
  );
}
