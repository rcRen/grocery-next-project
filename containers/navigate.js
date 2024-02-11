const Navigate = ({ category, slug }) => {
    console.info(slug)
    return (
        <ul className='space-y-3 mt-10'>
            <a href="/shop/">
                <li className={`text-slate-700 flex my-3 py-5 px-3 justify-between group hover:scale-110 hover:bg-slate-800 hover:text-white ${!slug && 'bg-lime-500  text-white'}`}>
                    All

                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className={`w-6 h-6 text-slate-600 group-hover:scale-110 group-hover:text-white ${!slug && 'text-white'}`}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
                    </svg>
                </li>
            </a>
            {
                category?.length > 0 && category?.map((item, index) => (
                    <a href={'/shop/' + item.slug}>
                        <li key={index} className={`text-slate-700 my-3 py-5 px-3 flex justify-between group hover:scale-110 hover:bg-slate-800 hover:text-white ${slug === item.slug && 'bg-lime-500 text-white'}`}>
                            {item.title}

                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className={`w-6 h-6 text-slate-600 group-hover:text-white ${slug === item.slug && 'text-white'}`}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
                            </svg>
                        </li>
                    </a>
                ))
            }
        </ul >
    )
}
export default Navigate;