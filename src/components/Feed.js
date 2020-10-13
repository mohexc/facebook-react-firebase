import React, { useEffect, useState } from 'react'
import "./Feed.less"
import MessageSender from './MessageSender'
import StoryReel from './StoryReel'
import Post from "./Post.js"
import { db } from '../configs/firebase'


// Main
const Feed = () => {

    const [posts, setPosts] = useState([])
    useEffect(() => {
        db
            .collection('posts')
            .orderBy("timestamp", "desc")
            .onSnapshot(snapshot => {
                setPosts(snapshot.docs.map(doc => ({
                    ...doc.data(), id: doc.id
                })))
            })
    }, [])

    return (
        <div className="feed">
            <StoryReel />
            <MessageSender />
            {posts.map(post =>
                <Post
                    key={post.id}
                    postId={post.id}
                    username={post.username}
                    profilePic={post.profilePic}
                    message={post.message}
                    timestamp={post.timestamp}
                    image={post.image}
                />
            )}
        </div>
    )
}

export default Feed
