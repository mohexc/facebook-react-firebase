import React from 'react'
import Story from './Story'
import "./StoryReel.less"

const storys = [
    {
        image: "https://source.unsplash.com/random/900x9001",
        profileSrc: "https://source.unsplash.com/random/900x900",
        title: "Jump CEO"
    },
    {
        image: "https://source.unsplash.com/random/900x9002",
        profileSrc: "https://source.unsplash.com/random/900x810",
        title: "Touch CTO"
    },
    {
        image: "https://source.unsplash.com/random/900x9003",
        profileSrc: "https://source.unsplash.com/random/900x802",
        title: "Dear COO"
    },
    {
        image: "https://source.unsplash.com/random/900x9004",
        profileSrc: "https://source.unsplash.com/random/900x803",
        title: "Matong \n Senior Developer"
    },
    {
        image: "https://source.unsplash.com/random/900x9005",
        profileSrc: "https://source.unsplash.com/random/900x804",
        title: "Hon Hon \n Junier Developer"
    },
    {
        image: "https://source.unsplash.com/random/700x9005",
        profileSrc: "https://source.unsplash.com/random/780x804",
        title: "4Four \n Qulity Tester"
    },
]

const StoryReel = () => {
    return (
        <div className="storyReel" >
            {storys.map(story => <Story key={`${story.image}`} image={story.image} profileSrc={story.profileSrc} title={story.title} />)}
        </div>
    )
}

export default StoryReel
