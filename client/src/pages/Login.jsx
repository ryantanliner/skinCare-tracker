import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function Login() {
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate('/main');
  };
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900">
      <div className="bg-sky-200 p-8 rounded-lg shadow-lg max-w-md w-full">
        <div className="text-center mb-6">
          <h2 className="text-2xl font-bold text-gray-800">Welcome To SkincareTracker!</h2>
          <p className="text-gray-600">Login</p>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
            Username
          </label>
          <input
            type="username"
            id="username"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
            Password
          </label>
          <input
            type="password"
            id="password"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center">
            <input
              type="checkbox"
              id="remember"
              className="mr-2 leading-tight"
            />
            <label className="text-sm text-gray-600" htmlFor="remember">
              Remember me
            </label>
          </div>
          <a href="#" className="text-sm text-blue-500 hover:text-blue-700">
            Forgot password?
          </a>
        </div>
        <div className="mb-4">
          <button
            onClick={handleLogin}
            className="bg-black text-white py-2 px-4 rounded w-full hover:bg-gray-800"
          >
            Create an Account
          </button>
        </div>
        <div className="text-center">
          <p className="text-sm text-gray-600">or</p>
        </div>
      </div>
    </div>
  );
}