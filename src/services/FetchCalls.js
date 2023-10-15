



export const getAllPosts = () => {

return fetch("http://localhost:8088/posts").then(
    (res)=> res.json()
)

}

export const getAllLikes = () => {

    return fetch("http://localhost:8088/likes").then(
        (res)=> res.json()
    )
    
    }

    export const getAllTopics = () => {

        return fetch("http://localhost:8088/topics").then(


            (res)=> res.json()
        )

    }
    


    export const getPostById = (postId) => {
        return fetch(`http://localhost:8088/posts/${postId}`).then((res) =>
          res.json()
        );
      };

     


      export const likePost = (postId, userId) => {
        // Make an API call to create the like relationship in the database
        return fetch("http://localhost:8088/likes", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            postId: postId,
            userId: userId,
          }),
        });
      };

      export const checkUserLikedPost = () => {
        return fetch("http://localhost:8088/likes?_expand=postId&_expand=userId")



      }

      export const getLikesByPostId = (postId) => {
        return fetch(`http://localhost:8088/likes/${postId}`).then((res) =>
          res.json()
        );
      };

      export const submitNewPost = (inputPost,inputTitle,option,currentUser) => {
        // Make an API call to create the like relationship in the database
        return fetch("http://localhost:8088/posts", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            title:inputTitle,
            body:inputPost,
            date:new Date().toISOString(),
            topicsId:parseInt(option),
            userId:currentUser.id
            
            
          }),
        });
      };
      
      export const deletePost = (postId) => {
        return fetch(`http://localhost:8088/posts/${postId}`, {
          method: "DELETE",
        });
      };