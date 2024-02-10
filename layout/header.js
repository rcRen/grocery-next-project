import React, { useState } from 'react'
import Image from "next/image";
import { useCart } from "../contexts/cart";
import SideCart from "../containers/sideCart"
const Header = () => {
    const { products } = useCart()
    const [openSlide, setOpenSlide] = useState(false)
    const handleOpenCart = () => {
        setOpenSlide(true)
    }
    return (
        <>
            <div className="fixed top-0 z-10 grid grid-cols-12 bg-white w-full h-24 place-items-center">
                <a href="/" className="col-start-1 col-end-3 flex items-center">
                    <Image src='/assets/icons/mango-fruit-icon.svg' width={50} height={50} alt="logo" />
                    <h1 className="font-bold text-2xl">OnlyFruit</h1>
                </a>
                <ul className="col-start-5 col-end-8 flex gap-12 font-semibold text-lg">
                    <li><a href="/">Home</a></li>
                    <li><a href='/shop/'>Shop</a></li>
                    <li>About</li>
                </ul>
                <div className="col-start-9 col-end-12 flex gap-5 place-items-center">
                    <div>
                        <a href="/auth/login" className="bg-lime-500 text-white p-3 hover:bg-green-700">
                            LOG IN
                        </a>
                    </div>
                    <div>
                        <a href="#" className="p-3">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-8 h-8 hover:scale-105">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                            </svg>

                        </a>
                    </div>
                    <div className="flex cursor-pointer hover:scale-105" onClick={handleOpenCart}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-7 h-7">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
                        </svg>
                        <span>{products && products.length}</span>
                    </div>
                </div>
            </div>

            <div className={`fixed top-0 z-20 right-0 h-screen transition-all ease-in-out duration-1000 ${openSlide ? "w-[30rem]" : "w-0"}`}>
                <SideCart setOpenSlide={setOpenSlide} />
            </div>
        </>
    )
}
export default Header;