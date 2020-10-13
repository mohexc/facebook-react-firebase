import { Avatar } from 'antd'
import React from 'react'
import "./Story.less"
const Story = ({ image, profileSrc, title }) => {
    return (
        <div className="story" style={{ backgroundImage: `url(${image})` }}>
            <Avatar size="large" className="story-avatar" src={profileSrc} />
            <h4>{title}</h4>
        </div>
    )
}

export default Story
