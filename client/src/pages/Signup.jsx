import React from 'react';

export default function Singup(){
  return(
    <div className="min-h-screen flex items-center justify-center bg-gray-900">
      <div className="bg-sky-200 p-8 rounded-lg shadow-lg max-w-md w-full">
        <div className="text-center mb-6">
          <h2 className="text-2xl font-bold text-gray-800">Welcome To SkincareTracker!</h2>
          <p className="text-gray-600">Sign Up</p>
        </div>
        <form>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm mb-2" htmlFor="username">
              Username
            </label>
            <input
              type="text"
              id="username"
              name="username"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm mb-2" htmlFor="name">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm mb-2" htmlFor="password">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div className="mb-4">
            <button
              type="submit"
              className="bg-black text-white py-2 px-4 rounded w-full hover:bg-gray-800"
            >
              Sign Up
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}