import React, { useState,useEffect } from "react";
import { getAllTopics, likePost } from "../../services/FetchCalls"; // You need to create these service functions



export const PostWithLikeButton = ({ post, currentUser }) => {
  const [isLiked, setIsLiked] = useState(false);
  const [allTopics, setAllTopics] = useState([]);

  useEffect(() => {
    getAllTopics().then((topicsArray) => {
      setAllTopics(topicsArray);
    });
  }, []);

    // const postTopic = [];

    // allTopics.find((topic) => {
    //   if (topic.id === post.topicsId){
    //     const topicForPost = topic.name
    //     postTopic.push(topicForPost)
    //   }
    // });

    const postTopic = allTopics
  .filter(topic => topic.id === post.topicsId)
  .map(topic => topic.name);

  const handleLike = () => {
    if (post.userId !== currentUser.id) {
      likePost(post.id, currentUser.id).then(() => {
        setIsLiked(true);
      });
    }
  };
  console.log(postTopic)
  return (
    <div className="post-details">
      <h2>{post.title}</h2>
      <p>Author: {post.userId}</p>
      <p>Topic:
      {postTopic}
      </p>
      <p>Date: {post.date}</p>
      <p>Body: {post.body}</p>
      <p>Likes: {post.likes}</p>
      {/* Display the like button only if the user is not the author and has not already liked the post */}
      {post.userId !== currentUser.id && !isLiked && (
        <button onClick={handleLike}>Like</button>
      )}
      {post.userId === currentUser.id && <button>Edit</button>}
    </div>
  );
};
