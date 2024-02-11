import { useCart } from "../contexts/cart";

const SideCart = ({ setOpenSlide }) => {
    const { products, subTotal, RemoveAllFromCart } = useCart();

    return products && (
        <div className="bg-white h-full w-full grid grid-rows-12 p-12">
            <div className="border-b-2 border-slate-100 w-full flex items-center justify-between">
                <span className="text-xl ">Cart</span>
                <button onClick={() => setOpenSlide(false)}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                    </svg>
                </button>
            </div>
            <div className="row-span-8 border-b border-slate-200 overflow-scroll py-3">
                {products?.map((product, index) => (
                    <div key={index} className="relative flex border-b border-slate-200 py-6">
                        <button onClick={() => RemoveAllFromCart(product)} className="absolute top-5 cursor-pointer hover:scale-105 hover:text-red-500">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                            </svg>
                        </button>
                        <div className="p-2">
                            <img src={product.image} alt={product.sequence} className="h-16 w-16 object-cover object-center" />
                        </div>
                        <div>
                            <p className="text-base font-semibold">{product.title}</p>
                            <p className="font-light text-gray-500">{product.quantity} X ${product.price}</p>
                        </div>
                    </div>
                ))}
            </div>
            <div className="flex justify-between items-center border-b border-slate-200 py-8">
                <span className="text-lg">Subtotal</span>
                <span className="text-lg font-semibold text-lime-500">${subTotal}</span>
            </div>
            <div className="row-span-2 flex justify-between items-center border-b border-slate-200">
                <a href="/cart"><button className="bg-lime-500 hover:bg-slate-800 py-3 px-5 text-semibold text-white">VIEW CART</button></a>
                <a href="/cart/checkout"><button className="bg-slate-800 hover:bg-lime-500 py-3 px-5 text-semibold text-white">CHECKOUT</button></a>
            </div>
        </div>
    )
}
export default SideCart;