import React, { useState,useEffect } from "react"
import { getAllTopics, getAllUsers, likePost } from "../../services/FetchCalls"


export const PostWithLikeButton = ({ post, currentUser }) => {
  const [isLiked, setIsLiked] = useState(false);
  const [allTopics, setAllTopics] = useState([]);
  const [allUsers, setAllUsers] = useState([]);


  useEffect(() => {
    getAllTopics().then((topicsArray) => {
      setAllTopics(topicsArray);
    });
  }, []);

  useEffect(() => {
    getAllUsers().then((usersArray) => {
      setAllUsers(usersArray);
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

  const postAuthor = allUsers
  .filter((user) => user.id === post.userId)
  .map((user )=> user.name);



  const handleLike = () => {
    if (post.userId !== currentUser.id) {
      likePost(post.id, currentUser.id).then(() => {
        setIsLiked(true);
      });
    }
  };
  
  return (
    <div className="post-details">
      <h2>{post.title}</h2>
      <p>Author:{postAuthor}</p>
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
