import { useEffect, useState } from "react"





export const NewPostDetails = () => {
const [inputPost, setInputPost] = useState("");





useEffect(() => {
    setInputPost("");
  }, []);

  const handleInputChange = (event) => {
    setInputPost(event.change.value);
  };







return (
  <div>
    <div className="new-post">
      <h1>New Post</h1>
      <input
        className="inputButton"
        placeholder="New Post Here"
        type="text"
        value={inputPost}
        onChange={handleInputChange}
      />
      {/*<button onClick={handleJokesSave}>Add</button>*/}
    </div>

   
  </div>
)




    
}