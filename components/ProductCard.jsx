import React, { useState } from 'react';
import { addToCart, getQuantityOfItemInCart, removeFromCart } from '../helper/lib';
import { useRouter } from 'next/router';
import { useCart } from '../contexts/cart';

export default ({ data, __self }) => {
  const { sequence, image, title, price } = data;
  const [quantity, setQuantity] = useState(getQuantityOfItemInCart(data)[2]);
  const router = useRouter();
  const {AddToCart,RemoveFromCart} = useCart();

  const addToCartHandler = () => {
    setQuantity(quantity + 1);
    AddToCart(data);
    
  };

  const removeFromCartHandler = () => {
    setQuantity(quantity - 1);
    RemoveFromCart(data);
  };
  return (
    <div className="w-full max-w-sm grid grid-rows-1 bg-white rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700 cursor-pointer">
      <a
        onClick={() => {
          router.push({
            pathname: '/product/[id]',
            query: { id: data.id },
          });
        }}
      >
        <img className="rounded-t-lg" src={image} alt={sequence} />
      </a>
      <div className="px-5 pb-5">
        <a href="#">
          <h5 className="text-lg font-semibold tracking-tight text-gray-500 dark:text-white">
            {title}
          </h5>
        </a>
        <div className="flex items-center justify-between">
          <span className="text-xl font-semibold text-gray-900 dark:text-white">${price}</span>
          <div className="flex items-center">
            {quantity !== 0 ? (
              <>
                <button
                  type="button"
                  onClick={removeFromCartHandler}
                  className="text-green-700  hover:bg-green-700 hover:text-white font-medium rounded-full text-sm p-1 text-center inline-flex items-center dark:border-green-500 dark:text-green-500 dark:hover:text-white"
                >
                  <svg
                    aria-hidden="true"
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 448 512"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M432 256c0 17.7-14.3 32-32 32L48 288c-17.7 0-32-14.3-32-32s14.3-32 32-32l352 0c17.7 0 32 14.3 32 32z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                  <span className="sr-only">Remove from Cart</span>
                </button>
                <span className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white mx-3">
                  {quantity}
                </span>
              </>
            ) : null}
            <button
              type="button"
              onClick={addToCartHandler}
              className="text-green-700  hover:bg-green-700 hover:text-white font-medium rounded-full text-sm p-1 text-center inline-flex items-center dark:border-green-500 dark:text-green-500 dark:hover:text-white"
            >
              <svg
                aria-hidden="true"
                className="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 448 512"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z"
                  clipRule="evenodd"
                ></path>
              </svg>
              <span className="sr-only">Add to Cart</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
