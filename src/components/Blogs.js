import React, {useContext} from "react";
import { AppContext } from "../context/AppContext";
import Spinner from "./Spinner";

const Blogs = () => {
    //consume
    const {loading, posts} = useContext(AppContext);

    return(
        <div className="w-11/12 max-w-[680px] flex flex-col py-8 gap-y-7 mt-[66px] mb-[70px] justify-center items-center">
            {
                loading ? (<Spinner />) : (
                    posts.length === 0 ? 
                    (<div><p>No Post Found</p></div>) : 
                    (posts.map( (post) => (
                        <div key={post.id} className="flex flex-col gap-y-1">
                            <p className="font-bold text-md">{post.title}</p>
                            <p> By <span className="italic">{post.author}</span> on <span className="font-bold text-sm underline decoration-dashed">{post.category}</span></p>
                            <p className="text-md "> Posted On {post.date} </p>
                            <p className=" text-md"> {post.content} </p>
                            <div className="flex gap-x-3">
                                {post.tags.map ( (tag, index) =>{ 
                                    return <span  key={index} className="text-blue-500 underline text-[12px] font-bold">{`#${tag}  `}</span>})}
                            </div>
                        </div>
                    )) )
                )
            }
        </div>
    )
}

export default Blogs;