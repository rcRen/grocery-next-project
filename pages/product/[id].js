import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import axios from 'axios';
import { useCart } from '../../contexts/cart';
import BreadCrumbs from '../../components/BreadCrumbs';
import { useRouter } from 'next/router';

export default ({ product }) => {
  const [quantity, setQuantity] = useState(1);
  const { AddToCart } = useCart();
  const handleChange = (e) => {
    const inputValue = e.target.value;
    if (inputValue) {
      inputValue > 1 ? setQuantity(inputValue) : setQuantity(1);
    } else {
      setQuantity(inputValue);
    }
  };

  const addToCartHandler = (product, quantity) => {
    AddToCart(product, quantity);
  };
  return (
    <>
      <Head>
        <title>{product.title}</title>
      </Head>
      <div className="grid grid-cols-1 gap-12 px-4 max-w-2xl mx-auto sm:px-6 sm:py-8 lg:max-w-7xl lg:grid-cols-1 lg:px-8">
        <div>
          <div className="h-1/12  bg-primary p-3 text-white">{/* <BreadCrumbs /> */}</div>
          <div className="h-1/12  bg-primary p-3 text-white">
            <a>back</a>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-36 justify-items-stretch lg:grid-cols-2">
          <div className="justify-self-center">
            <img src={product.image} alt={product.sequence} />
          </div>
          <div className="grid grid-cols-1 w-5/6 justify-items-stretch justify-self-start p-6 text-start border-gray-200 border-2 rounded-lg sm:gap-6 sm:justify-self-center lg:justify-self-start">
            <div className="border-b-2 border-b-gray-200 p-6">
              <div className="pb-6">
                <div>
                  <p className="text-xl text-gray-400">{product.brand}</p>
                </div>
                <div>
                  <p className="text-3xl">{product.title}</p>
                </div>
                <div>
                  <p className="text-lg text-gray-500">
                    {product.measure} {product.measureUnit.toLowerCase()}
                  </p>
                </div>
              </div>
              <div>
                <p className="text-3xl font-extrabold text-primary">CA${product.price}</p>
              </div>
            </div>
            <div className="grid grid-cols-1 gap-3">
              <div className="w-1/2 flex justify-between bg-white border-2 border-gray-200 rounded-full ">
                <div className="">
                  <input
                    className="w-full h-full py-3 px-6 bg-transparent border-0 text-gray-800 focus:outline-none focus:ring focus:border-blue-500 focus:rounded-l-full"
                    type="text"
                    value={quantity}
                    min="1"
                    onChange={(e) => handleChange(e)}
                  />
                </div>
                <div className="flex flex-col justify-end items-center gap-x-1.5 mx-3">
                  <button
                    type="button"
                    id="incrementBtn"
                    className="w-3 h-3 inline-flex justify-center items-center m-1 hover:bg-gray-400 hover:rounded-full"
                    onClick={() => setQuantity(quantity + 1)}
                  >
                    <svg
                      className="w-3 h-3 bg-transparent"
                      xmlns="http://www.w3.org/2000/svg"
                      height="16"
                      width="16"
                      viewBox="0 0 512 512"
                    >
                      <path d="M233.4 105.4c12.5-12.5 32.8-12.5 45.3 0l192 192c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L256 173.3 86.6 342.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l192-192z" />
                    </svg>
                  </button>
                  <button
                    type="button"
                    className="w-3 h-3 inline-flex justify-center items-center m-1 hover:bg-gray-200 hover:rounded-full disabled:pointer-events-none disabled:bg-white disabled:rounded-full disabled:opacity-25"
                    disabled={quantity == 1 ? true : false}
                    name="decrementBtn"
                    onClick={() => setQuantity(quantity - 1)}
                  >
                    <svg
                      className="w-3 h-3 bg-transparent"
                      xmlns="http://www.w3.org/2000/svg"
                      height="16"
                      width="16"
                      viewBox="0 0 512 512"
                    >
                      <path d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z" />
                    </svg>
                  </button>
                </div>
              </div>
              <div className="w-full">
                <button
                  className="w-full bg-primary  h-12 rounded-full text-white text-base font-bold hover:bg-black"
                  onClick={() => addToCartHandler(product, quantity)}
                >
                  + ADD TO CART
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export async function getServerSideProps({ req, res, query }) {
  const { id } = query;
  const API_PRODUCTS = `http://${req.headers.host}/api/product/${id}`;
  const response = await axios.get(API_PRODUCTS);
  const product = response.data.product;

  return {
    props: {
      product,
    },
  };
}
