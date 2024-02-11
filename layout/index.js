import Head from "next/head";
import Footer from "./footer"
import Header from "./header"

const Layout = ({ children }) => {
    return (
        <>
            <Head>
                <link rel="icon" href="/assets/icons/mango-fruit-icon.svg" />
            </Head>
            <div className="bg-white relative">
                <Header />
                <main className="my-28 ">
                    <div >{children}</div>
                </main>
                <Footer />
            </div>
        </>
    )
}
export default Layout;