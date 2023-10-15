import { Link, useNavigate } from "react-router-dom"
import "./NavBar.css"



export const NavBar = ()=>{
const navigate= useNavigate()
return (
<ul className="navbar">
<li className="navbar-item">

    <Link to="/posts">HOME{/*AllPosts*/}</Link>
</li>

<li className="navbar-item">

    <Link to="/newPost">NEW POST</Link>
</li>

<li className="navbar-item">

    <Link to="/myPost">MY POSTS</Link>
</li>





{localStorage.getItem("learning_user") ? (
  <li className="navbar-item navbar-logout">
    <Link
      className="navbar-link"
      to=""
      onClick={() => {
        localStorage.removeItem("learning_user")
        navigate("/", { replace: true })
      }}
    >
      LOGOUT
    </Link>
  </li>
) : (
  ""
)}


</ul>

)

}