import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Login() {
  const navigate = useNavigate();
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const handleLogin = (event) => {
    event.preventDefault()
    console.log(username, password)
    // navigate('/main');
  };
  return (

    <div className="min-h-screen flex items-center justify-center bg-gray-900">
      <div className="bg-sky-200 p-8 rounded-lg shadow-lg max-w-md w-full">
        <div className="text-center mb-6">
          <h2 className="text-2xl font-bold text-gray-800">Welcome To SkincareTracker!</h2>
          <p className="text-gray-600">Login</p>
        </div>
        <form onSubmit={handleLogin}>
          <div className="mb-4 block text-gray-700 text-sm mb-2" htmlFor="username">
            Username
            <input
              type="username"
              name="username"
              value={username}
              onChange={({ target }) => setUsername(target.value)}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div className="mb-4 block text-gray-700 text-sm mb-2" htmlFor="password">
            Password
            <input
              type="text"
              name="password"
              value={password}
              onChange={({ target }) => setPassword(target.value)}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div className="mb-4">
            <button
              type="submit"
              className="bg-black text-white py-2 px-4 rounded w-full hover:bg-gray-800"
            >
              Sign in
            </button>
          </div>
        </form>
        <div className="text-center">
          <p className="text-sm text-gray-600">or</p>
          <button>create an account</button>
        </div>
      </div>
    </div>

  );
}


{/* <div className="flex items-center justify-between mb-4">
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
          </div> */}