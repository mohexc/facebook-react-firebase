import React from 'react'
import "./Feed.less"
import MessageSender from './MessageSender'
import StoryReel from './StoryReel'
import Post from "./Post.js"

const posts = [
    {
        profilePic: "https://source.unsplash.com/random/500x301",
        message: "wow this works!",
        timetamp: "this is a timestamp",
        username: "sdfadsdaf",
        image: "https://source.unsplash.com/random/720x622",
    },
    {
        profilePic: "https://source.unsplash.com/random/500x301",
        message: "wow this works!",
        timetamp: "this is a timestamp",
        username: "sdfadsdaf",
        image: "https://source.unsplash.com/random/720x600",
    },
]

// Main
const Feed = () => {
    return (
        <div className="feed">
            <StoryReel />
            <MessageSender />
            {posts.map(post =>
                <Post
                    username={post.username}
                    profilePic={post.profilePic}
                    message={post.message}
                    timestamp={post.timetamp}
                    image={post.image}
                />
            )}
        </div>
    )
}

export default Feed
