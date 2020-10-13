import React from 'react'
import Story from './Story'
import "./StoryReel.less"

const storys = [
    {
        image: "https://source.unsplash.com/random/900x9001",
        profileSrc: "https://source.unsplash.com/random/900x900",
        title: "Sony Sangha"
    },
    {
        image: "https://source.unsplash.com/random/900x9002",
        profileSrc: "https://source.unsplash.com/random/900x810",
        title: "Rafeh Qazi"
    },
    {
        image: "https://source.unsplash.com/random/900x9003",
        profileSrc: "https://source.unsplash.com/random/900x802",
        title: "Frankie"
    },
    {
        image: "https://source.unsplash.com/random/900x9004",
        profileSrc: "https://source.unsplash.com/random/900x803",
        title: "Aaron Bernath"
    },
    {
        image: "https://source.unsplash.com/random/900x9005",
        profileSrc: "https://source.unsplash.com/random/900x804",
        title: "Naz"
    },
    {
        image: "https://source.unsplash.com/random/900x9006",
        profileSrc: "https://source.unsplash.com/random/900x805",
        title: "Matong"
    },
]

const StoryReel = () => {
    return (
        <div className="storyReel" >
            {storys.map(story => <Story image={story.image} profileSrc={story.profileSrc} title={story.title} />)}
        </div>
    )
}

export default StoryReel
