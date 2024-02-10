import Image from "next/image";

const FeatureSection = () => {
    return (
        <div className="bg-white grid grid-cols-4 grid-rows-2 gap-5 px-12">
            <div className="relative bg-green-100 col-span-2 row-span-2 w-full flex justify-end border-black">
                <Image src="/assets/feature-01.png" width={560} height={500} alt="feature pic" />
                <div className="absolute left-12 top-20 text-start w-2/5">
                    <h1 className="text-4xl font-bold mb-6">Green Lemon Pear Juice</h1>
                    <span className="text-slate-600">BEST FLAVOUR YOU NEVER MISS</span>
                    <button className="mt-8 bg-lime-400 text-start w-fit p-3 text-white cursor-pointer rounded-full">
                        SHOP NOW
                    </button>
                </div>
            </div>
            <div className="relative bg-stone-100 col-span-2 row-span-1 w-full  flex justify-end">
                <Image src="/assets/feature-03.png" width={560} height={250} alt="feature pic" />
                <div className="absolute left-12 top-8 text-start w-2/5">
                    <h1 className="text-4xl font-bold mb-6">Fresh Mango Drinks</h1>
                    <button className="mt-3 bg-lime-400 text-start w-fit p-3 text-white cursor-pointer rounded-full">
                        SHOP NOW
                    </button>
                </div>
            </div>
            <div className="relative bg-stone-100 col-span-2 row-span-1 w-full flex">
                <Image src="/assets/feature-02.png" width={560} height={250} alt="feature pic" />
                <div className="absolute right-12 top-8 text-start w-2/5">
                    <h1 className="text-4xl font-bold mb-6">Fresh Almond Seeds</h1>
                    <button className="mt-3 bg-lime-400 text-start w-fit p-3 text-white cursor-pointer rounded-full">
                        SHOP NOW
                    </button>
                </div>
            </div>
        </div>
    )
}
export default FeatureSection;