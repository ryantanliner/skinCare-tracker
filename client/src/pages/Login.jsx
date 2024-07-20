import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import loginService from '../services/login';
import routineService from '../services/routines'

function Login() {
  const navigate = useNavigate();
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

  const navigateSignUp = () => {
    navigate('/signup')
  }

  const handleLogin = async (event) => {
    event.preventDefault()

    try{
       const user = await loginService.login({
        username, password
      })
      window.localStorage.setItem(
        'loggedUser', JSON.stringify(user)
      ) 
      routineService.setToken(user.token)
      setUsername('')
      setPassword('')
      navigate('/main')
    } catch (exception) {
      console.log('wrong')
      setError('incorrect username/password')
      setTimeout(() => {
        setError(null)
      }, 5000)
    }
  }
  return (

    <div className="min-h-screen flex items-center justify-center bg-gray-900">
      <div className="bg-sky-200 p-8 rounded-lg shadow-lg max-w-md w-full">
        <div className="text-center mb-6">
          <h2 className="text-2xl font-bold text-gray-800">Welcome To SkincareTracker!</h2>
          <p className="text-gray-600">Login</p>
          <h3>{error}</h3>
        </div>
        <form onSubmit={handleLogin}>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm mb-2" htmlFor="username">
              Username
            </label>
            <input
              type="text"
              id="username"
              name="username"
              value={username}
              onChange={({ target }) => setUsername(target.value)}
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
          <button onClick={navigateSignUp} className="bg-white text-black py-1 px-4 rounded w-full hover:bg-gray-800">Sign Up</button>
        </div>
      </div>
    </div>

  );
}

export default Login


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