import React from 'react'
import './YoutubeComp.css'

const YoutubeComp = () => {
    return (
        <div className="youtube-wrapper">
            <div className="img-thumb">
                <img src="https://miro.medium.com/max/3840/1*vHHBwcUFUaHWXntSnqKdCA.png" alt="" />
                <p className="time">07:30</p>
            </div>
            <p className="title">Title here</p>
            <p className="desc">Desc here</p>
        </div>
    )
}

export default YoutubeComp