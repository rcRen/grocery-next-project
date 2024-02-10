import React, { useState, useEffect, useRef } from 'react';
import Head from 'next/head';
import axios from 'axios';

import { Banner } from "../../containers";
import { Card, Loading } from '../../components';

const Shop = () => {
    const [products, setProducts] = useState([]);
    const [page, setPage] = useState(1);
    const [totalPage, setTotalPage] = useState(1);
    const [category, setCategory] = useState([]);
    const [loading, setLoading] = useState(true)
    const scrollRef = useRef()
    const scrollToTop = () => {
        scrollRef.current.scrollIntoView({ behavior: 'smooth' });
    };

    const previousPageHandler = () => {
        scrollToTop();
        page > 1 && setPage(page - 1);
    };
    const nextPageHandler = () => {
        scrollToTop();
        page < totalPage && setPage(page + 1);
    };
    useEffect(() => {
        const API_CATEGORY = '/api/category';
        axios
            .get(API_CATEGORY)
            .then(function ({ data }) {
                setCategory(data);
            })
            .catch(function (error) {
                console.log(error);
            });
    }, [])

    useEffect(() => {
        const API_PRODUCTS = '/api/product';
        axios
            .get(API_PRODUCTS, {
                params: {
                    page,
                },
            })
            .then(function ({ data }) {
                setProducts(data.displayProducts);
                setTotalPage(data.totalPage);
                setLoading(false)
            })
            .catch(function (error) {
                console.log(error);
            });
        return () => setLoading(true)
    }, [page]);

    return (
        <>
            <Head>
                <title>OnlyFruit-shop</title>
            </Head>
            <Banner title={"Shop"} />
            <div ref={scrollRef} />
            <div className="grid grid-cols-7 mx-28 mt-24" >
                <div className="col-span-2 px-6">
                    <div className="border-2 border-gray-200 p-3 mb-32 sticky top-28" >
                        <p className="inline-flex text-lg text-slate-700 font-semibold">
                            <span className="inline-flex items-center items-center before:border-2 before:border-lime-500 before:h-1 before:w-6 before:rounded-lg after:mx-1 after:border-2 after:border-lime-500 after:h-1 after:w-1 after:rounded-lg" />
                            Product Categories
                        </p>
                        <ul className='space-y-6 mt-10'>
                            <li className='text-slate-700 flex justify-between group'>
                                All
                                <a href="/shop">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 text-slate-600 group-hover:scale-110 group-hover:text-lime-500">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
                                    </svg>
                                </a>
                            </li>
                            {category.length > 0 && category.slice(0, 5).map((item, index) => (
                                <li key={index} className={`text-slate-700 flex justify-between group`}>
                                    {item.title}
                                    <a href={'/shop/' + item.slug}>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 text-slate-600 group-hover:scale-110 group-hover:text-lime-500">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
                                        </svg>
                                    </a>
                                </li>
                            ))}
                        </ul>

                    </div>
                </div>
                <div className="col-span-5 mx-6">
                    {!loading ?
                        (<div className=" grid grid-cols-3 gap-y-5" >
                            {products.map((item, index) => (
                                <Card key={index} data={item} />
                            ))}
                        </div>)
                        :
                        (<div className='flex justify-center'>
                            <Loading />
                        </div>
                        )}
                    < div className='flex justify-center space-x-6 my-12'>
                        <div onClick={previousPageHandler} className='border-2 border-gray-200 w-10 h-10 flex justify-center items-center text-slate-500 hover:bg-lime-500 hover:text-white'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="m18.75 4.5-7.5 7.5 7.5 7.5m-6-15L5.25 12l7.5 7.5" />
                            </svg>
                        </div>
                        <div className='w-15 h-10 flex justify-center items-center  text-slate-500'>{page} / {totalPage}</div>
                        <div onClick={nextPageHandler} className='border-2 border-gray-200 w-10 h-10 flex justify-center items-center  text-slate-500 hover:bg-lime-500 hover:text-white'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="m5.25 4.5 7.5 7.5-7.5 7.5m6-15 7.5 7.5-7.5 7.5" />
                            </svg>

                        </div>
                    </div>
                </div>
            </div >

        </>
    )


}
export default Shop