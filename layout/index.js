import Head from "next/head";
import Footer from "./footer"
import Header from "./header"

const Layout = ({ children }) => {
    return (
        <>
            <div className="bg-white relative">
                <Header />
                <main className="mt-28 ">
                    <div >{children}</div>
                </main>
                <Footer />
            </div>
        </>
    )
}
export default Layout;