import React from 'react';
import { useCart } from '../../contexts/cart';
import currency from 'currency.js';

const summary = () => {
  const { products, subTotal, tax, total } = useCart();

  return (
    <div className="bg-white">
      <div className="mx-auto grid max-w-2xl grid-cols-1 items-top gap-y-16 gap-x-32 py-4 px-4 sm:px-6 sm:py-8 lg:max-w-7xl lg:grid-cols-1 lg:px-8">
        <div className="mb-8  m-6 -my-6">
          <p className="text-base font-medium tracking-tight text-green-700  sm:text-base">
            Successful
          </p>
          <h1 className="text-4xl font-bold tracking-tight text-gray-700 pb-2 sm:text-4xl">
            Thanks for ordering
          </h1>
          <p className="text-lg tracking-tight text-gray-500 pb-6 sm:text-base">
            We appreciate your order, we're currently processing it. So hang tight and we'll send
            you confirmation very soon!
          </p>
        </div>

        {/* <ul role="list" className="m-6 -my-6 divide-y divide-gray-200 ">
          <li className="flex py-6">
            <div className="ml-4 flex flex-1 flex-col">
              <div className="flex flex-1 items-end justify-between text-sm">
                <div className="flex items-center space-x-3">
                  <p className="text-gray-500">Order number</p>
                </div>
              </div>
              <div className="flex flex-1 items-end justify-between text-sm">
                <div className="flex items-center space-x-3">
                  <p className="text-base text-green-700"></p>
                </div>
              </div>
            </div>
          </li>
          {products &&
            products.map((product, index) => (
              <li key={index} className="flex py-6">
                <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                  <img
                    src={product.image}
                    alt=""
                    className="h-full w-full object-cover object-center"
                  />
                </div>
                <div className="ml-4 flex flex-1 flex-col">
                  <div>
                    <div className="flex justify-between text-base font-medium text-gray-900">
                      <h3>
                        <a href="">{product.title}</a>
                      </h3>
                      <p className="ml-4">${currency(product.price * product.quantity).value}</p>
                    </div>
                  </div>
                  <div className="flex flex-1 items-end justify-between text-sm">
                    <div className="flex items-center space-x-3">
                      <p className="text-gray-500">${product.price}</p>
                    </div>
                  </div>
                  <div className="flex flex-1 items-end justify-between text-sm">
                    <div className="flex items-center space-x-3">
                      <p className="text-gray-500">Qty: {product.quantity}</p>
                    </div>
                  </div>
                </div>
              </li>
            ))}
          <li className="flex py-6">
            <div className="ml-4 flex flex-1 flex-col">
              <div className="my-3 flex justify-between text-base font-medium text-gray-900">
                <h3 className="text-gray-500">Subtotal</h3>
                <p className="ml-4">${subTotal}</p>
              </div>
              <div className="flex justify-between text-base font-medium text-gray-900">
                <h3 className="text-gray-500">Taxes</h3>
                <p className="ml-4">${tax}</p>
              </div>
            </div>
          </li>
          <li className="flex py-6">
            <div className="ml-4 flex flex-1 flex-col">
              <div className="flex justify-between text-lg font-medium text-gray-900">
                <h3 className="text-gray-800">Total</h3>
                <p className="ml-4">${total}</p>
              </div>
            </div>
          </li>
        </ul>

        <ul role="list" className="m-6 -my-6 divide-y divide-gray-200 ">
          <li className="flex py-6">
            <div className="ml-4 flex flex-1 flex-col">
              <div className="flex justify-between text-base font-medium text-gray-900">
                <h3 className="text-gray-800">Payment information</h3>
              </div>
            </div>
          </li>
        </ul> */}
      </div>
    </div>
  );
};

export default summary;
