import { Outlet, Route, Routes } from "react-router-dom"
import { NavBar } from "../components/nav/NavBar"
import { Welcome } from "../components/welcome/Welcome"
import { useEffect, useState } from "react"
import { PostDetails } from "../components/posts/PostDetails"
import { NewPost } from "../components/posts/NewPost"
import { ALLPosts } from "../components/posts/AllPosts"
import { MyPost } from "../components/posts/MyPost"











export const ApplicationViews = () => {
    
    const [currentUser, setCurrentUser] = useState({})

useEffect(() => {
  const localLearningUser = localStorage.getItem("learning_user")
  const learningUserObject = JSON.parse(localLearningUser)
  setCurrentUser(learningUserObject)
}, [])
    return (<>

    <Routes>
  <Route path="/"

element={
<>
<NavBar />
<Outlet />
</>
}
>
<Route index element={<Welcome />} />
<Route path ="posts" index element={<ALLPosts  currentUser={currentUser} />} />
<Route path="posts/:postId" element={<PostDetails currentUser={currentUser} />} />
<Route path="myPost" element={<MyPost currentUser={currentUser} />} />
<Route path ="newPost" index element={<NewPost currentUser={currentUser}/>} />




</Route>
  </Routes>



    

    
  </>
    )
}
