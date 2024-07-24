import React from "react";
import { NavLink } from "react-router-dom";

const BlogDetails = ({post}) =>{


    return(
        <div className="flex  flex-col w-full left-[50px]">
            <NavLink to={`/blog/${post.id}`}>
                <span className="text-lg font-bold" >{post.title}</span>
            </NavLink> 
            <p >
                By
                <span className=" italic px-2">{post.author}</span>
                on {" "}
                <NavLink to={`/categories/${post.category.replaceAll(" ","-" )}`}> 
                    <span className=" underline font-bold decoration-dotted ">{post.category}</span>
                </NavLink>
            </p>
            <p className="gap-x-2">Posted on {post.date}</p>
            <p> {post.content} </p>
            <div>
                {post.tags.map ( (tag,index) => (
                    <NavLink key={index} to={`/tags/${tag.replaceAll(" ","-")}`}>
                        <span>{`#${tag}`}</span>
                    </NavLink>
                ))}
            </div>
            
        </div>
    );
}

export default BlogDetails;