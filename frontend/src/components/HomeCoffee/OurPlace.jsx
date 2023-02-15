import React, { useState, useRef } from 'react';
import '../../styles/homeCoffee/ourPlace.css';

const OurPlace = () => {

    const [isPlaying, setIsPlaying] = useState(false);
    const videoRef = useRef(null);

    const togglePlay = () => {
        if (isPlaying) {
            videoRef.current.pause();
        } else {
            videoRef.current.play();
        }
        setIsPlaying(!isPlaying);
    };

    return (
        <section id='our-place'>
            <video
                style={{ objectFit: "cover" }}
                ref={videoRef}
                width="100%"
                height="600px"
                loop="loop"
            >
                <source src="https://resca.thimpress.com/wp-content/uploads/2015/07/video.webm" type="video/mp4" />
            </video>
            <div className="container">
                <div className='our-place-content'>
                    <h2>Take a look</h2>
                    <h1>OUR PLACE</h1>
                    <div>
                        <button onClick={togglePlay}>
                            {isPlaying ? <i className="fa-solid fa-pause"></i> : <i className="fa-solid fa-play"></i>}
                        </button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default OurPlace