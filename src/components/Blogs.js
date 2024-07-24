import React, {useContext} from "react";
import { AppContext } from "../context/AppContext";
import Spinner from "./Spinner";
import BlogDetails from "./BlogDetails";

const Blogs = () => {
    //consume
    const {loading, posts} = useContext(AppContext);

    return(
        <div className="w-full max-w-[680px] h-full py-8 mt-[66px] mb-[70px] flex flex-col justify-center items-center gap-y-8">
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