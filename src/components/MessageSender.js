import { Avatar, message } from 'antd'
import React, { useState } from 'react'
import { MdVideocam, MdPhotoLibrary, MdInsertEmoticon } from "react-icons/md";
import { db, timestamp } from '../configs/firebase';
import { useAuthContext } from '../context/AuthContext';
import "./MessageSender.less"

// main
const MessageSender = () => {
    const [input, setInput] = useState('')
    const [imageUrl, setImageUrl] = useState('')
    const { user } = useAuthContext()

    const handleSubmit = (e) => {
        e.preventDefault()
        db.collection('posts').add({
            message: input,
            timestamp: timestamp(),
            profilePic: user.photoURL,
            username: user.displayName,
            image: imageUrl
        }).then(res => message.info(`saved success`)).catch(e => message.error(e.message))
        setInput("")
        setImageUrl("")
    }
    return (
        <div className="messageSender">
            <div className="messageSender-top">
                <Avatar size="large" src={user.photoURL} />
                <form >
                    <input
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        type="text"
                        placeholder={`What's on your mind ? ${user.displayName}`}
                        className="messageSender-input"
                    />
                    <input
                        value={imageUrl}
                        onChange={(e) => setImageUrl(e.target.value)}
                        placeholder="image URL (Optional)" />
                    <button
                        onClick={handleSubmit}
                        type="submit">
                        Hidden submit
                        </button>
                </form>
            </div>

            <div className="messageSender-bottom">
                <div className="messageSender-option">
                    <MdVideocam size={30} style={{ color: "red" }} />
                    <h3>Live Video  </h3>
                </div>

                <div className="messageSender-option">
                    <MdPhotoLibrary size={30} style={{ color: "green" }} />
                    <h3>Photo/Video  </h3>
                </div>

                <div className="messageSender-option">
                    <MdInsertEmoticon size={30} style={{ color: "orange" }} />
                    <h3> Feeling/Activity</h3>
                </div>
            </div>
        </div>
    )
}

export default MessageSender
