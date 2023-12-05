import React, { useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';

function login(props) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const router = useRouter();
  const emptyField = () => {
    setEmail('');
    setPassword('');
  };
  console.info(email);
  const handleSubmit = async (e) => {
    e.preventDefault();
    const API_LOGIN = '/api/auth/login';
    if (email && email.includes('@')) {
      if (password) {
        await axios
          .post(API_LOGIN, {
            email,
            password,
          })
          .then(({ data }) => {
            if (data.success) {
              router.push('/');
            } else {
              setError(data.message);
              emptyField();
            }
          });
      } else {
        setError('Password cannot be empty');
        emptyField();
      }
    } else {
      setError('Please enter a valid email address');
      emptyField();
    }
  };
  return (
    <div className="bg-white">
      <div className="grid grid-cols-1 justify-items-center my-12">
        <h2 className="text-4xl tracking-tight">Sign In</h2>
      </div>
      <div className="grid gap-6 w-1/2 min-w-5xl mx-auto my-3 border-2 border-gray-300 rounded-lg p-6 sm:w-full md:w-1/2 lg:w-1/3 ">
        {error && (
          <div className="h-12 p-3 bg-error-bg inline-flex items-center gap-3 ">
            <svg xmlns="http://www.w3.org/2000/svg" height="16" width="16" viewBox="0 0 512 512">
              s
              <path
                fill="#f87171"
                d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zm0-384c13.3 0 24 10.7 24 24V264c0 13.3-10.7 24-24 24s-24-10.7-24-24V152c0-13.3 10.7-24 24-24zM224 352a32 32 0 1 1 64 0 32 32 0 1 1 -64 0z"
              />
            </svg>
            <span className="text-error-red">{error}</span>
          </div>
        )}
        <div>
          <span htmlFor="email" className="block text-base font-medium leading-6 text-gray-900">
            Email address
          </span>
          <div>
            <input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              value={email}
              required
              onChange={(e) => setEmail(e.target.value)}
              className="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
          </div>
        </div>
        <div>
          <div className="flex justify-between">
            <span
              htmlFor="password"
              className="block text-base font-medium leading-6 text-gray-900"
            >
              Password
            </span>
            <span className="text-primary">Forgot password?</span>
          </div>

          <input
            id="password"
            name="password"
            type="password"
            autoComplete="password"
            value={password}
            required
            onChange={(e) => setPassword(e.target.value)}
            className="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          />
        </div>
        <div>
          <button
            className="bg-primary text-white rounded-lg h-12 w-full hover:bg-black"
            onClick={handleSubmit}
          >
            Sign in
          </button>
        </div>
        <div className="justify-self-end">
          <p>
            Do not have an account yet?{' '}
            <a
              href="/auth/register"
              className="text-primary underline underline-offset-2 cursor-pointer"
            >
              Create new account
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default login;
