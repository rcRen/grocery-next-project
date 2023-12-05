import React from 'react';
import currency from 'currency.js';
import { useCart } from '../contexts/cart';

const cartItem = ({ data }) => {
  const { id, image, title, price, quantity } = data;

  const { AddToCart, RemoveFromCart } = useCart();

  const addToCartHandler = () => AddToCart(data);

  const removeFromCartHandler = () => RemoveFromCart(data);

  return (
    <>
      <li key={id} className="flex py-6">
        <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
          <img src={image} alt="" className="h-full w-full object-cover object-center" />
        </div>

        <div className="ml-4 flex flex-1 flex-col">
          <div>
            <div className="flex justify-between text-base font-medium text-gray-900">
              <h3>
                <a href="">{title}</a>
              </h3>
              <p className="ml-4">${currency(price).value}</p>
            </div>
          </div>
          <div className="flex flex-1 items-end justify-between text-sm">
            <div className="flex items-center space-x-3">
              <p className="text-gray-500">Qty</p>

              <button
                onClick={removeFromCartHandler}
                className="inline-flex items-center p-1 text-sm font-medium text-gray-500 bg-white rounded-full border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
                type="button"
              >
                <span className="sr-only">Quantity button</span>
                <svg
                  className="w-4 h-4"
                  aria-hidden="true"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </button>
              <div>
                <input
                  type="text"
                  id="first_product"
                  className="bg-gray-50 w-14 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block px-2.5 py-1 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder={quantity}
                  readOnly={true}
                  required
                />
              </div>
              <button
                onClick={addToCartHandler}
                className="inline-flex items-center p-1 text-sm font-medium text-gray-500 bg-white rounded-full border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
                type="button"
              >
                <span className="sr-only">Quantity button</span>
                <svg
                  className="w-4 h-4"
                  aria-hidden="true"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </button>
            </div>
{/* 
            <div className="flex">
              <button type="button" className="font-medium text-indigo-600 hover:text-indigo-500">
                Remove
              </button>
            </div> */}
          </div>
        </div>
      </li>
    </>
  );
};
export default cartItem;
