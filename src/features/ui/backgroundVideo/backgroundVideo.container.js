import React from 'react';
import './index.css'

const BackgroundVideo = ({ videoSource, children }) => {
    return (
        <div className='background-video-container'>
            <video className='background-video-tag' autoPlay loop muted>
                <source src={videoSource} type='video/mp4' />
            </video>
            { children }
        </div>
    )
}; 

export default BackgroundVideo;