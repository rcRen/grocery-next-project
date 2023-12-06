import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';
import ProductCard from '../../components/ProductCard';
import Head from 'next/head';

export default (props) => {
  const { slug } = useRouter().query;

  const API_CATEGORY = `/api/category/${slug}`;
  const [products, setProducts] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPage, setTotalPage] = useState(1);
  const [category, setCategory] = useState({});
  const [loaded, setLoaded] = useState(false);

  const previousPageHandler = () => {
    page > 1 && setPage(page - 1);
  };
  const nextPageHandler = () => {
    page < totalPage && setPage(page + 1);
  };

  useEffect(() => {
    slug &&
      axios
        .post(API_CATEGORY, {
          page,
        })
        .then(function ({ data }) {
          setLoaded(true);
          setProducts(data.displayProducts);
          setTotalPage(data.totalPage);
          setCategory(data.category);
        })
        .catch(function (error) {
          console.log(error);
        });
  }, [slug, page]);

  return loaded ? (
    slug && (
      <>
        <Head>
          <title>{category.title}</title>
        </Head>
        <div className="">
          <h3 className="text-gray-700 text-5xl font-bold">{category.title}</h3>
          <div className="mt-12 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-6 xl:grid-cols-6 xl:gap-x-10">
            {products.map((product, index) => (
              <ProductCard key={index} data={product} />
            ))}
          </div>
          <div className="mx-auto max-w-2xl py-16 px-4 flex justify-center items-center sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
            <button
              type="button"
              onClick={previousPageHandler}
              className="text-green-700 border border-green-700 hover:bg-green-700 hover:text-white focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center dark:border-green-500 dark:text-green-500 dark:hover:text-white dark:focus:ring-green-800"
            >
              <svg
                aria-hidden="true"
                className="w-5 h-5"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
              >
                <path
                  fillRule="evenodd"
                  d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.2 288 416 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-306.7 0L214.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z"
                  clipRule="evenodd"
                />
              </svg>

              <span className="sr-only">Previous Page</span>
            </button>
            <span className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white mx-5">
              {page}/{totalPage}
            </span>
            <button
              type="button"
              onClick={nextPageHandler}
              className="text-green-700 border border-green-700 hover:bg-green-700 hover:text-white focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center dark:border-green-500 dark:text-green-500 dark:hover:text-white dark:focus:ring-green-800"
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
                  d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"
                  clipRule="evenodd"
                ></path>
              </svg>

              <span className="sr-only">Next Page</span>
            </button>
          </div>
        </div>
      </>
    )
  ) : (
    <>
      <div>Loading...</div>
    </>
  );
};
