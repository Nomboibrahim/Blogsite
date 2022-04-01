import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";


function BlogDetail(){
    const location = useLocation()
    const [post, setPosts] = useState ({});

    useEffect(()=>{
        setPosts(location.state.post);

    },  [location.state])
      
    


    return(
        <div>
        {post && (
            <div>
            <h2>{post.title}</h2>
            <p>{post.extract}</p>
            <img src={`/images/${post.image}`}
            alt= "" height={350} width="100"/>
            <p>{post.body}</p>
            </div>
        )}
        </div>
    )
    }
    export default BlogDetail
