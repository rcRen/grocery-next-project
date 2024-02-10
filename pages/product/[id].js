import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import axios from 'axios';
import { useCart } from '../../contexts/cart';
import Banner from '../../containers/banner';

export default ({ product }) => {
  const { id, image, category, sequence, brand, title, price } = product
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
  let a = 2 / 0;

  const addToCartHandler = (product, quantity) => {
    AddToCart(product, quantity);
  };
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <Banner title={"Product Detail"} />
      <div className="m-36 grid grid-cols-1 gap-12 place-self-center max-w-2xl sm:px-6 sm:py-8 lg:max-w-7xl">
        <div className="grid grid-cols-1 gap-36 justify-items-stretch lg:grid-cols-2">
          <div className="justify-self-center ease-in duration-300 hover:scale-125">
            <img src={image} alt={sequence} />
          </div>
          <div className="grid grid-cols-1 w-full h-2/3 justify-items-stretch justify-self-start p-6 sm:gap-6 sm:justify-self-center lg:justify-self-start">
            <div className="border-b border-b-slate-200 p-6">
              <div className="pb-6">
                <p className="text-normal text-gray-400">{brand}</p>
                <p className="text-xl font-bold">{title}</p>
              </div>
              <div>
                <p className="text-4xl font-normal text-lime-500">CA${price}</p>
              </div>
            </div>
            {/* <div className="border-b border-b-slate-200 p-6">
              <p>{category}</p>
            </div> */}
            <div className="flex space-x-5">
              <div className="w-2/3 flex justify-between bg-white border-2 border-gray-200 justify-contents-center">
                <button
                  type="button"
                  id="incrementBtn"
                  className="m-1"
                  onClick={() => setQuantity(quantity + 1)}
                >
                  <span className='text-lg px-2 hover:text-lime-500'>+</span>
                </button>
                {/* <div className=""> */}
                <input
                  className="text-center w-full h-full py-3 px-6 bg-transparent border-x-2 border-gray-200 text-gray-800 focus:outline-none focus:ring focus:border-blue-500"
                  type="text"
                  value={quantity}
                  min="1"
                  onChange={(e) => handleChange(e)}
                />
                {/* </div> */}
                <button
                  type="button"
                  className="m-1 disabled:pointer-events-none disabled:bg-white disabled:opacity-25"
                  disabled={quantity == 1 ? true : false}
                  name="decrementBtn"
                  onClick={() => setQuantity(quantity - 1)}
                >
                  <span className='text-lg px-2 hover:text-lime-500'>-</span>
                </button>
              </div>
              <div className="w-full">
                <button
                  className="w-full h-full inline-flex justify-center items-center bg-lime-500 text-white text-base font-bold hover:bg-black"
                  onClick={() => addToCartHandler(product, quantity)}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                    <path d="M2.25 2.25a.75.75 0 0 0 0 1.5h1.386c.17 0 .318.114.362.278l2.558 9.592a3.752 3.752 0 0 0-2.806 3.63c0 .414.336.75.75.75h15.75a.75.75 0 0 0 0-1.5H5.378A2.25 2.25 0 0 1 7.5 15h11.218a.75.75 0 0 0 .674-.421 60.358 60.358 0 0 0 2.96-7.228.75.75 0 0 0-.525-.965A60.864 60.864 0 0 0 5.68 4.509l-.232-.867A1.875 1.875 0 0 0 3.636 2.25H2.25ZM3.75 20.25a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0ZM16.5 20.25a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0Z" />
                  </svg>
                  ADD TO CART
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
