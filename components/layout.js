import React, { useEffect, useState, Fragment } from 'react';
import { Popover, Transition } from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/20/solid';
import Category from './category';

import { useCart } from '../contexts/cart';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}
export default (props) => {
  const { products } = useCart();
  return (
    <div className="container mx-auto pb-6 ">
      <div className="grid grid-cols-4 gap-4 relative">
        {/* header*/}

        <Popover className="col-start-1 col-end-5 relative bg-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6">
            <div className="flex items-center justify-between border-b-2 border-gray-100 py-6 md:justify-start md:space-x-10">
              <div className="flex justify-start mr-24 lg:w-0 lg:flex">
                <a href="/">
                  <span className="sr-only">Your Company</span>
                  <span className="self-center text-3xl text-red-700 font-semibold whitespace-nowrap dark:text-white">
                    Shop
                  </span>
                </a>
              </div>
              <Popover.Group as="nav" className="hidden space-x-10 md:flex">
                <Popover className="relative">
                  {({ open }) => (
                    <>
                      <Popover.Button
                        className={classNames(
                          open ? 'text-gray-900' : 'text-gray-500',
                          'group inline-flex items-center rounded-md bg-white text-base font-medium hover:text-gray-900'
                        )}
                      >
                        <span>Category</span>
                        <ChevronDownIcon
                          className={classNames(
                            open ? 'text-gray-600' : 'text-gray-400',
                            'ml-2 h-5 w-5 group-hover:text-gray-500'
                          )}
                          aria-hidden="true"
                        />
                      </Popover.Button>
                      <Transition
                        as={Fragment}
                        enter="transition ease-out duration-200"
                        enterFrom="opacity-0 translate-y-1"
                        enterTo="opacity-100 translate-y-0"
                        leave="transition ease-in duration-150"
                        leaveFrom="opacity-100 translate-y-0"
                        leaveTo="opacity-0 translate-y-1"
                      >
                        <Popover.Panel className="absolute z-10 -ml-4 mt-3 w-screen max-w-md transform px-2 sm:px-0 lg:left-1/2 lg:ml-0 lg:-translate-x-1/2">
                          <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
                            <Category />
                          </div>
                        </Popover.Panel>
                      </Transition>
                    </>
                  )}
                </Popover>

                <a href="#" className="text-base font-medium text-gray-500 hover:text-gray-900">
                  Stores
                </a>
                <a href="#" className="text-base font-medium text-gray-500 hover:text-gray-900">
                  About us
                </a>
              </Popover.Group>
              <div className="hidden items-center justify-end md:flex md:flex-1 lg:w-0">
                <a
                  href="/auth/login"
                  className="whitespace-nowrap text-base font-medium text-gray-500 hover:text-gray-900"
                >
                  Sign in
                </a>
                <a
                  href="/auth/register"
                  className="ml-8 inline-flex items-center justify-center whitespace-nowrap rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-indigo-700"
                >
                  Sign up
                </a>
                <a
                  href="#"
                  className=" ml-8 whitespace-nowrap text-base font-medium text-gray-500 hover:text-gray-900"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                    ></path>
                  </svg>
                  <span className="sr-only">account</span>
                </a>
                <a
                  href="#"
                  className=" ml-8 whitespace-nowrap text-base font-medium text-gray-500 hover:text-gray-900"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8 "
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                    ></path>
                  </svg>
                  <span className="sr-only">Favorite</span>
                </a>
                <a
                  href="/cart"
                  className=" ml-8 whitespace-nowrap text-base font-medium text-gray-500 hover:text-gray-900"
                >
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-8 w-8 inline"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                      ></path>
                    </svg>
                    {products && products.length}
                  </span>
                  <span className="sr-only">Cart</span>
                </a>
              </div>
            </div>
          </div>
        </Popover>

        {/* main*/}
        <div className="col-start-1 col-end-5 min-h-screen">{props.children}</div>
        {/* footer */}
        <footer className="col-start-1 col-end-5 m-3 p-3 border-slate-300 border-y border-b-0">
          <div className="text-center">
            Powered by Shop @2022, &nbsp;
            <span className=" text-gray-500">
              Images provided by
              <a href="https://www.iga.net" className="text-blue-800">
                &nbsp;IGA
              </a>
            </span>
          </div>
        </footer>
      </div>
    </div>
  );
};
