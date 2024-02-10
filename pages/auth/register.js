import React, { useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';
import Banner from '../../containers/banner';

export default (props) => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [confirmPwd, setConfirmPwd] = useState();
  const [message, setMessage] = useState('');
  const [success, setSuccess] = useState(false);
  const API_REGISTER = '/api/auth/register';

  const router = useRouter();

  const emptyField = () => {
    setEmail('');
    setPassword('');
    setConfirmPwd('');
  };

  const handleSubmit = async () => {
    if (!email || !password || !confirmPwd) {
      setMessage('Please fill all the field.');
      emptyField();
    } else {
      if (email.includes('@')) {
        if (password === confirmPwd) {
          await axios
            .post(API_REGISTER, {
              email,
              password,
              confirmPwd,
            })
            .then(({ data }) => {
              if (data.success) {
                setSuccess(true);
                setMessage(data.message);
                setTimeout(() => {
                  router.push('/auth/login');
                }, 2000);
              } else {
                setMessage(data.message);
                emptyField();
              }
            });
        } else {
          setMessage('Two field of password are not matched');
          emptyField();
        }
      } else {
        setMessage('Please enter the valid email address');
        emptyField();
      }
    }
  };

  return (
    <>
      <Banner title=" Account" />
      <div className="bg-white my-24">
        <div className="grid grid-cols-1 justify-items-center my-12">
          <h2 className="text-4xl tracking-tight">Register Your Account</h2>
        </div>
        <div className="grid w-1/2 min-w-5xl mx-auto my-3 gap-6 p-6 sm:w-full md:w-1/2 lg:w-1/3 ">
          {message &&
            (success ? (
              <div className="h-12 p-3 bg-success-bg inline-flex items-center gap-3 ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="16"
                  width="16"
                  viewBox="0 0 512 512"
                >
                  <path
                    fill="#4bde80"
                    d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z"
                  />
                </svg>
                <span className="text-success-green">{message}</span>
              </div>
            ) : (
              <div className="h-12 p-3 bg-error-bg inline-flex items-center gap-3 ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="16"
                  width="16"
                  viewBox="0 0 512 512"
                >
                  <path
                    fill="#f87171"
                    d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zm0-384c13.3 0 24 10.7 24 24V264c0 13.3-10.7 24-24 24s-24-10.7-24-24V152c0-13.3 10.7-24 24-24zM224 352a32 32 0 1 1 64 0 32 32 0 1 1 -64 0z"
                  />
                </svg>
                <span className="text-error-red">{message}</span>
              </div>
            ))}
          <div>
            <span htmlFor="email" className="block text-base font-medium leading-6 text-gray-900">
              Email address
            </span>
            <div>
              <input
                id="email"
                name="email"
                type="email"
                value={email}
                required
                autoComplete="email"
                className="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
          </div>
          <div>
            <span
              htmlFor="password"
              className="block text-base font-medium leading-6 text-gray-900"
            >
              Password
            </span>

            <div>
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="new-password"
                value={password}
                required
                className="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </div>
          <div>
            <span
              htmlFor="password"
              className="block text-base font-medium leading-6 text-gray-900"
            >
              Confirm Password
            </span>
            <div>
              <input
                id="confirmPassword"
                name="confirmPassword"
                type="password"
                value={confirmPwd}
                required
                autoComplete="confirm-password"
                className="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                onChange={(e) => setConfirmPwd(e.target.value)}
              />
            </div>
          </div>
          <div>
            <button
              className="bg-lime-500 text-white h-12 w-full hover:bg-black"
              onClick={handleSubmit}
            >
              Sign up
            </button>
          </div>
          <div className="justify-self-end">
            <p>
              Already has an account?{' '}
              <a
                href="/auth/login"
                className="text-primary underline underline-offset-2 cursor-pointer"
              >
                Click to Login
              </a>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
