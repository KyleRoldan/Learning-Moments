import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getPostById} from "../../services/FetchCalls"
import { PostWithLikeButton } from "./PostWithLikeButton"



export const PostDetails = ({ currentUser }) => {
  const { postId} = useParams();
  
  

 
  
  const [post, setPost] = useState({});
 

  useEffect(() => {
    getPostById(postId).then((postData) => {
      setPost(postData);
    });
  }, [postId]);

  
  
console.log(post)

  return <PostWithLikeButton post={post} currentUser={currentUser}/>;
};
