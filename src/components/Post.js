import Avatar from 'antd/lib/avatar/avatar'
import React from 'react'
import { MdThumbUp, MdChatBubbleOutline, MdNearMe, MdAccountCircle, MdExpandMore } from "react-icons/md";
import "./Post.less"

// Main
const Post = ({ profilePic, image, username, timestamp, message }) => {
    return (
        <div className="post">
            <div className="post-top">
                <Avatar size="large" src={profilePic} style={{ marginRight: "1rem" }} />
                <div className="post-topInfo">
                    <h3>{username}</h3>
                    <p>{new Date(timestamp?.toDate()).toUTCString()}</p>
                </div>
            </div>
            <div className="post-bottom">
                <p>{message}</p>
            </div>
            <div className="post-image">
                <img src={image} alt="imagePost" />
            </div>

            <div className="post-options">
                <div className="post-option">
                    <MdThumbUp size="24" />
                </div>
                <div className="post-option">
                    <MdChatBubbleOutline size="24" />
                </div>
                <div className="post-option">
                    <MdNearMe size="24" />
                </div>
                <div className="post-option">
                    <MdAccountCircle size="28" />
                    <MdExpandMore size="24" />
                </div>
            </div>
        </div>
    )
}

export default Post
