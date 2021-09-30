import React from "react";
import Dashboard from "./Dashboard";


const Layout = ({name, children}) =>{
    const Layout = name === "dashboard" && Dashboard
    return(
        <Layout>
            {children}
        </Layout>
    )
}

export default Layout