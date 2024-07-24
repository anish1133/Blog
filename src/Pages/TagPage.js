import React from "react";
import Header from "../components/Header";
import { useLocation, useNavigate, useNavigation } from "react-router-dom";
import Blogs from "../components/Blogs";
import Pagination from "../components/Pagination";


const  TagPage = () => {

    const navigation = useNavigate();
    const location =useLocation();
    const tag = location.pathname.split("/").at(-1);

    return (
        <div className=" w-full flex flex-col justify-center items-center">
            <Header/>
            <div className=" w-full max-w-[680px] mt-24 ">
                <button className="rounded-md border-4 px-3.5 py-1  mb-4 "
                    onClick={()=>navigation(-1)}
                >
                    back
                </button>
                <h2 className=" text-black font-bold text-lg -mb-36">
                    Blogs Tagged <span className="underline text-blue-600">#{tag}</span>
                </h2>
            </div>
            <Blogs/>
            <Pagination/>

        </div>

    );
}

export default TagPage;