// pages/register.js
import React, { useState } from "react";
import axios from "axios";
// pages/register.js
import "tailwindcss/tailwind.css"; // Import Tailwind CSS
import { useRouter } from "next/router";

const Login = () => {
  const router = useRouter();
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Handle registration logic here
    // console.log(formData);
    const { password, confirmPassword } = formData;
    const errors = {};

    try {
      console.log("try");
      const response = await axios.post(
        "http://localhost:5000/login",
        formData
      );
      console.log("response", response);
      router.push("/");
      return response;
    } catch (error) {
      console.log(error);
      return false;
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md w-96">
        <h2 className="text-2xl font-semibold mb-4">Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-600 text-sm font-medium">
              Username
            </label>
            <input
              type="text"
              name="username"
              value={formData.username}
              onChange={handleChange}
              className="w-full border rounded p-2"
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-600 text-sm font-medium">
              Password
            </label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="w-full border rounded p-2"
            />
          </div>

          <button
            type="submit"
            className="bg-blue-500 text-white rounded p-2 hover:bg-blue-600 transition duration-200 mb-4"
            onClick={handleSubmit}
          >
            Login
          </button>
          <p className="text-gray-600 text-sm">
            Don't have an account yet?{" "}
            <a href="/register" className="text-blue-500 hover:underline">
              Sign up!
            </a>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;