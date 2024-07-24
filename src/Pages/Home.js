import React from "react";
import Header from "../components/Header";
import Blogs from "../components/Blogs";
import Pagination from "../components/Pagination";

const  Home=() => {

    return (
        <div className="w-full h-full flex flex-col justify-center items-center npm run ">
            <Header />
            <div>
                <Blogs />
                <Pagination />
            </div>
        </div>

    );
}

export default Home;