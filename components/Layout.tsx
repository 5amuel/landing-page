import React from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";

const Layout:React.FunctionComponent = ({children}) => {
    return(
        <div>
            <Navbar />
            {children}
            <Footer />
        </div>
    )
}
export default Layout;