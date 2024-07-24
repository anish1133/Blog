import React from "react";
import { useLocation, useNavigate, useNavigation } from "react-router-dom";
import Header from "../components/Header";
import Pagination from "../components/Pagination";
import Blogs from "../components/Blogs";

const  CategoryPage=() => {

    const navigation =  useNavigate();
    const location = useLocation();
    const category = location.pathname.split("/").at(-1);

    return (
        <div className=" w-full flex flex-col justify-center items-center  ">
            <Header/>
            <div className=" w-full max-w-[680px] mt-24 -mb-16 ">
                <button className="rounded-md border-4 px-3.5 py-1  mb-4"
                    onClick={()=>navigation(-1)}
                >
                    back
                </button>
                <h2 className="underline text-black font-bold text-lg">
                    Blogs on <span>{category}</span>
                </h2>
            </div>
            <Blogs/>
            <Pagination/>
        </div>

    );
}

export default CategoryPage;