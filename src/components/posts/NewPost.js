import { useEffect, useState } from "react"
import { getAllPosts, getAllTopics, submitNewPost } from "../../services/FetchCalls"


export const NewPost = ({currentUser}) => {
    const [allPosts, setAllPosts] = useState([])
    const [inputPost, setInputPost] = useState("")
    const [postData, setPostData] = useState({});
    const [inputTitle, setInputTitle] = useState("")
    const [allTopics, setAllTopics] = useState([])
    const [searchTerm, setSearchTerm] = useState({})
    
    
    useEffect(() => {
        getAllPosts().then((postsArray) => {
            setAllPosts(postsArray);

        })
    }, [])
    

    useEffect(() => {
        getAllTopics().then((topicsArray) => {
            setAllTopics(topicsArray)
        })
    }, [])

    

    ///////////////////////Topics/////////////////////////////////////

   


    /////////////////Input Features/////////////////////////////////


    const handlePostSave = () => {
        submitNewPost(inputPost,inputTitle,searchTerm,currentUser).then((post) => {
          setPostData(post);
        });
      };
    
      useEffect(() => {
        setInputPost("")
        setInputTitle("")
        setSearchTerm({})
      }, [postData]);
    
      const handleInputChange = (event) => {
        setInputPost(event.target.value);
      };
    
      const handleTitleChange = (event) => {
        setInputTitle(event.target.value);
      };

      const handleTopicChange = (event) => {
        const selectedId = event.target.value
        setSearchTerm( selectedId );
      };




   

    
      

    return ( <>

        <div>
        <h1>New Post</h1>
        <input
          className="newPost"
          placeholder="New Post Here"
          type="text"
          value={inputPost}
          onChange={handleInputChange}
        />

        <h1>Title</h1>
        <input
          className="newTitle"
          placeholder="Create Title"
          type="text"
          value={inputTitle}
          onChange={handleTitleChange}
        />

        <select
            value={searchTerm}
            onChange={handleTopicChange}>
            <option>Select an option</option>

            {allTopics.map((option) => (
                <option key={option.id} value={option.id}>
                    {option.name}
                </option>
            ))}
        </select>

        <button onClick={() => {
            handlePostSave()
           
            }}>Add</button>
        
        </div>

    </>
    )
}
