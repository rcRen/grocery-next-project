import React, { useEffect, useState } from 'react';
import axios from 'axios'
import Head from "next/head";
import { ProductGrid, FeatureSection, Hero } from "../containers";
import { Loading } from '../components';

const IndexPage = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true)
    const API_PRODUCTS = '/api/product';
    useEffect(() => {
        axios
            .get(API_PRODUCTS, {
                params: {
                    offset: 8,
                },
            })
            .then(function ({ data }) {
                setProducts(data.displayProducts);
                setLoading(false)
            })
            .catch(function (error) {
                console.log(error);
            });
    }, []);

    return !loading ? (
        <>
            <Head>
                <title>OnlyFruit</title>
            </Head>
            <div className="w-full">
                <Hero />
            </div>
            <div className="mx-10 my-24 space-y-12 text-center">
                <div className="">
                    <FeatureSection />
                </div>
                <div className='px-5'>
                    <h1 className="text-5xl font-bold mb-6">Our Products</h1>
                    <ProductGrid data={products} />
                </div>

            </div>
        </>
    ) :
        <div className='flex justify-center'>
            <Loading />
        </div>

}
export default IndexPage