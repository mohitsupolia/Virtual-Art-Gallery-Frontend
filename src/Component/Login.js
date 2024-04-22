import React, { useState } from "react";
import axios from "axios";
import { Navigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [flag, setFlag] = useState(false); // Changed to false by default

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:8082/api/login", {
        email,
        password,
      });
      console.log("Data sent successfully:", response.data);

      setFlag(true);
      // You can handle success response here
    } catch (error) {
      console.error("Error sending data:", error);
      // You can handle error response here
    }
  };

  if (flag) {
    return <Navigate to="/" />;
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-black">
      <div className="max-w-md w-full space-y-8 p-10 rounded-xl shadow-lg border border-customGreen">
        <div className="text-center">
          <h2 className="mt-6 text-3xl font-bold text-white">
            Sign in to your account
          </h2>
        </div>
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <input type="hidden" name="remember" value="true" />
          <div className="rounded-md shadow-sm -space-y-px">
            <div>
              <label htmlFor="email-address" className="sr-only">
                Email address
              </label>
              <input
                id="email-address"
                name="email"
                type="email"
                autoComplete="email"
                required
                onChange={handleEmailChange}
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-white text-white rounded-t-md focus:outline-none focus:ring-green-500 focus:border-green-500 focus:z-10 sm:text-sm bg-gray-800"
                placeholder="Email address"
              />
            </div>
            <div className="py-2">
              <label htmlFor="password" className="sr-only">
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password" 
                autoComplete="current-password"
                required
                onChange={handlePasswordChange}
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-white text-white rounded-b-md focus:outline-none focus:ring-green-500 focus:border-green-500 focus:z-10 sm:text-sm bg-gray-800"
                placeholder="Password"
              />
            </div>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <input
                id="remember-me"
                name="remember-me"
                type="checkbox"
                className="h-4 w-4 text-green-600 focus:ring-green-500 border-gray-300 rounded bg-gray-800"
              />
              <label
                htmlFor="remember-me"
                className="ml-2 block text-sm text-gray-100"
              >
                Remember me
              </label>
            </div>

            <div className="text-sm">
              <a
                href="#"
                className="font-medium text-green-600 hover:text-green-500"
              >
                Forgot your password?
              </a>
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-green-500 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 bg-gray-800"
            >
              Sign in
            </button>
          </div>
        </form>
        <hr className="bg-gray-600" />
        <p className="text-center text-white">or</p>
        {/* <GoogleLogin /> */}
      </div>
    </div>
  );
};

export default Login;

