import React, { useEffect } from 'react';
import CartItem from '../../components/cartItem';
import { useCart } from '../../contexts/cart';
import { Banner } from '../../containers';

export default (props) => {
  const { products, subTotal, tax, total } = useCart();

  return (
    <>
      <Banner title={"Cart"} />
      {products &&
        products.length > 0 && (
          <div className="bg-white m-24">
            <div className="mx-auto grid max-w-2xl grid-cols-1 items-top gap-y-16 gap-x-32 py-4 px-4 sm:px-6 sm:py-8 lg:max-w-7xl lg:grid-cols-2 lg:px-8">
              <div>
                <ul role="list" className="-my-6 divide-y divide-gray-200">
                  {products.map((product, index) => (
                    <CartItem key={index} data={product} />
                  ))}
                </ul>
              </div>
              <div className="grid grid-cols-1 sm:gap-6 lg:gap-8 h-fit">
                <div className="w-full max-w-md p-4 bg-white border rounded-lg shadow-md sm:p-8 dark:bg-gray-800 dark:border-gray-700">
                  <div className="flex items-top justify-between mb-4">
                    <h5 className="text-2xl leading-none text-gray-900 dark:text-white">
                      Order summary
                    </h5>
                  </div>
                  <div className="flow-root">
                    <ul role="list" className="divide-y divide-gray-200 dark:divide-gray-700">
                      <li className="py-3 sm:py-4">
                        <div className="flex items-center space-x-4">
                          <div className="flex-1 min-w-0">
                            <p className="text-m text-gray-500 truncate dark:text-white">Subtotal</p>
                          </div>
                          <div className="inline-flex items-center text-base font-medium text-gray-900 dark:text-white">
                            ${subTotal}
                          </div>
                        </div>
                      </li>
                      <li className="py-3 sm:py-4">
                        <div className="flex items-center space-x-4">
                          <div className="flex-1 min-w-0">
                            <p className="text-m text-gray-500 truncate dark:text-white">
                              Tax estimate
                            </p>
                          </div>
                          <div className="inline-flex items-center text-base font-medium text-gray-900 dark:text-white">
                            ${tax}
                          </div>
                        </div>
                      </li>
                      <li className="py-3 sm:py-4">
                        <div className="flex items-center space-x-4">
                          <div className="flex-1 min-w-0">
                            <p className="text-lg text-gray-800 truncate dark:text-white">
                              Order total
                            </p>
                          </div>
                          <div className="inline-flex items-center text-base font-medium text-gray-900 dark:text-white">
                            ${total}
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                  <div className="mx-auto text-center mt-6">
                    <a href="/cart/checkout">
                      <button
                        type="submit"
                        className="w-full flex justify-center text-white bg-lime-500 hover:bg-green-800  font-lg text-xl px-5 py-2.5 text-center inline-flex items-center mr-2 dark:bg-green-600 dark:hover:bg-green-700"
                      >
                        Checkout
                      </button>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
    </>);
};
