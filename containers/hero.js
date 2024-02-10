const Hero = () => {
    return (<>
        <div className="h-[40rem] bg-lime-50 flex bg-cover bg-bottom animate-opacity" style={{ backgroundImage: `url("/assets/bg-slide-01.jpeg")` }}>
            <div className="mx-56 my-48">
                <p className="font-dancing text-3xl mt-12 "> Welcome to the shop</p>
                <h1 className="font-extrabold text-6xl tracking-widest"> OnlyFruit</h1>
                <p className="font-ligh text-xl text-gray-500 mt-10"> Here, we only have fruits.</p>
                <button className="mt-8 bg-lime-400 text-start w-fit p-3 text-white cursor-pointer animate-bounce hover:animate-none">
                    SHOP NOW
                </button>
            </div>
        </div >
    </>)
}

export default Hero;