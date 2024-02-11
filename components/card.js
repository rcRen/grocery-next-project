import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { useCart } from '../contexts/cart';

const Card = ({ data }) => {
    const router = useRouter();
    const { _id, image, title, price, sequence, salePrice } = data;
    const { AddToCart, RemoveFromCart, products } = useCart();
    const [isAddedToCart, setIsAddToCart] = useState(false)

    const addToCartHandler = () => {
        setIsAddToCart(false)
        AddToCart(data);
        setIsAddToCart(true)
    };

    return (
        <div className="group relative border-2 border-gray-100 flex flex-col w-[250px] items-center hover:shadow-lg">
            <div className="w-[230px] h-[230px] bg-local bg-cover" style={{ backgroundImage: `url(${image})` }}>
                <img src={image} style={{ width: '230px', height: '230px' }} alt={sequence} className={`scale-100 transition-all ${isAddedToCart && "animate-cart"}`} />
            </div>
            <div className="flex flex-col py-3 h-28 items-center justify-center justify-around">
                <h2 className="font-semibold text-base">{title}</h2>
                <div className="flex space-x-3">
                    <p className="text-xl text-lime-500">${salePrice > 0 ? salePrice : price}</p>
                    {salePrice > 0 && <p className="text-xl text-lime-500/[0.7] line-through">${price}</p>}
                </div>
            </div>
            <div className="absolute flex space-x-2 invisible top-48 group-hover:visible group-hover:top-36 cursor-pointer transition-all ease-out duration-900 opacity-0 group-hover:opacity-100">
                {/* cart icon */}
                <div
                    onClick={addToCartHandler}
                    className={`p-3 bg-white rounded-full hover:bg-lime-500`}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className=" w-6 h-6">
                        <path d="M2.25 2.25a.75.75 0 0 0 0 1.5h1.386c.17 0 .318.114.362.278l2.558 9.592a3.752 3.752 0 0 0-2.806 3.63c0 .414.336.75.75.75h15.75a.75.75 0 0 0 0-1.5H5.378A2.25 2.25 0 0 1 7.5 15h11.218a.75.75 0 0 0 .674-.421 60.358 60.358 0 0 0 2.96-7.228.75.75 0 0 0-.525-.965A60.864 60.864 0 0 0 5.68 4.509l-.232-.867A1.875 1.875 0 0 0 3.636 2.25H2.25ZM3.75 20.25a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0ZM16.5 20.25a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0Z" />
                    </svg>
                </div>
                {/* eyes icon */}
                <div onClick={() => {
                    router.push({
                        pathname: '/product/[id]',
                        query: { id: _id },
                    })
                }}
                    className="p-3 bg-white rounded-full hover:bg-lime-500 ">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                        <path d="M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" />
                        <path fillRule="evenodd" d="M1.323 11.447C2.811 6.976 7.028 3.75 12.001 3.75c4.97 0 9.185 3.223 10.675 7.69.12.362.12.752 0 1.113-1.487 4.471-5.705 7.697-10.677 7.697-4.97 0-9.186-3.223-10.675-7.69a1.762 1.762 0 0 1 0-1.113ZM17.25 12a5.25 5.25 0 1 1-10.5 0 5.25 5.25 0 0 1 10.5 0Z" clipRule="evenodd" />
                    </svg>
                </div>
            </div>

        </div >
    )
}
export default Card;