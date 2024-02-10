const Banner = ({ title }) => {
    return (
        <div className="w-full h-[20rem] px-32 py-16 flex justify-between items-end bg-blend-darken bg-black/[0.7] bg-local bg-cover" style={{ backgroundImage: `url(/assets/banner.jpeg)` }}>
            <div className="">
                <p className="text-lime-300 text-lg font-dancing">Welcome to OnlyFruit</p>
                <h1 className="text-white text-5xl">{title?.toUpperCase()}</h1>
            </div>
            <div className="">
                <p className="font-semibold text-white text-lg"> <a href="/" className="text-cyan-700 cursor-pointer hover:text-lime-300">Home </a>| <span className="text-lime-300">{title} </span></p>
            </div>
        </div>
    )
}
export default Banner;