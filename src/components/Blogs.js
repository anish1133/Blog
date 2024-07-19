import React, {useContext} from "react";
import { AppContext } from "../context/AppContext";
import Spinner from "./Spinner";
import BlogDetails from "./BlogDetails";

const Blogs = () => {
    //consume
    const {loading, posts} = useContext(AppContext);

    return(
        <div className="w-full max-w-[680px] flex flex-col py-8 gap-y-7 mt-[66px] mb-[70px] justify-center items-center">
            {
                loading ? (<Spinner />) : (
                    posts.length === 0 ? 
                    (<div><p>No Post Found</p></div>) : 
                    (posts.map( (post) => (
                        <BlogDetails key ={post.id} post={post} />
                    )) )
                )
            }
        </div>
    )
}

export default Blogs;