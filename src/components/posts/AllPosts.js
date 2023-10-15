import { useState, useEffect } from "react";
import { getAllPosts, getAllLikes, getAllTopics } from "../../services/FetchCalls";
import { Link } from "react-router-dom"

export const ALLPosts = ({currentUser}) => {
    const [allPosts, setAllPosts] = useState([])
    const [allLikes, setAllLikes] = useState([])
    const [likeCount, setLikeCount] = useState([])
    const [allTopics, setAllTopics] = useState([])
    const [topicForPost, setTopicForPost] = useState([])
    const [searchTerm, setSearchTerm] = useState("")
    const [filteredPosts, setFilteredPosts] = useState([])

    useEffect(() => {
        getAllLikes().then((likesArray) => {
            setAllLikes(likesArray)
        })
    }, [])

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
    ///////////////////////likes/////////////////////////////////////
    useEffect(() => {
        const postLikeCounts = {}

        allPosts.forEach((post) => {
            const likesForPost = allLikes.filter(
                (like) => like.postId === post.id
            )
            postLikeCounts[post.id] = likesForPost.length
        })

        setLikeCount(postLikeCounts)
    }, [allPosts, allLikes])
    /////////////////////////////////////////////////////////////////

    ///////////////////////Topics/////////////////////////////////////

    useEffect(() => {
        const postTopic = {}

        allPosts.forEach((post) => {
            const TopicsForPost = allTopics.filter(
                (topic) => topic.id === post.topicsId
            );
            postTopic[post.id] = TopicsForPost
        });

        setTopicForPost(postTopic)
    }, [allPosts, allTopics])


    /////////////////////////////////////////////////////////////////

    /////////////////Search Features/////////////////////////////////


    useEffect(() => {
       const foundPosts = allPosts.filter(post =>
            post.title.toLowerCase().includes(searchTerm.toLowerCase()))
        setFilteredPosts(foundPosts)
    }, [searchTerm, allPosts])


    /////////////////////////////////////////////////////////////////


    return <>
        <select
            value={searchTerm}
            onChange={(event) => setSearchTerm(event.target.value)}>
            <option>Select a post</option>

            {allPosts.map((option) => (
                <option key={option.id}>
                    {option.title}
                </option>
            ))}
        </select>

        <input
            onChange={(event) => { setSearchTerm(event.change.value) }}
            type="text"
            placeholder="search title"
            className="title-search"
        />


        <div className="postBody">
            {filteredPosts.map((post) => (
                <div key={post.id}>
                    <Link to={`/posts/${post.id}`}>{post.title}</Link>
                     - Topic: {topicForPost[post.id]?.map(topic => topic.name)} - Likes: {likeCount[post.id] || 0}
                </div>
            ))}

        </div>

    </>
}

export default ALLPosts