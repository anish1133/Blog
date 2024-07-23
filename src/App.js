import React, { useContext, useEffect } from "react";
import Header from './components/Header';
import Blogs from './components/Blogs';
import Pagination from './components/Pagination';
import { AppContext } from "./context/AppContext";
import "./App.css"
import { useSearchParams,useLocation } from "react-router-dom";
import { BrowserRouter,Route,Routes } from "react-router-dom";
import Home from "./Pages/Home";
import BlogPage from "./Pages/BlogPage";
import CategoryPage from "./Pages/CategoryPage";
import TagPage from "./Pages/TagPage";


export default function App() {

  const {fetchBlogPosts} = useContext(AppContext);
  const [searchParams ,setSearchParams] = useSearchParams();
  const location = useLocation();

  useEffect( ()=> {
   // fetchBlogPosts();
const page = searchParams.get("page") ?? 1;

   if(location.pathname.includes("tags")){
      const tag =  location.pathname.split("/").at(-1).replaceAll("-"," ");
      fetchBlogPosts(Number(page),tag);
   }
   else if(location.pathname.includes("categories")){
    const category = location.pathname.split("/").at(-1).replaceAll("-"," ");
    fetchBlogPosts(Number(page),null,category);
   }
   else{
    fetchBlogPosts(Number(page));
   }
  },[location.pathname,location.search]);
  
  return (
   /* <div className="w-full h-full flex flex-col justify-center items-center gap-y-1 ">
        <Header />
        <Blogs />
        <Pagination />
    </div>
    */
    <Routes >
        <Route path="/" element={<Home/>} />
        <Route path="/blog/:blogId" element={<BlogPage/>} />
        <Route path="/tags/:tag" element={<TagPage/>} />
        <Route path="/categories/:category" element={<CategoryPage/>} />
    </Routes>

  );
}  
