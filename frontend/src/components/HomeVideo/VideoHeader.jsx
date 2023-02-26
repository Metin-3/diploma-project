import React from 'react';

const VideoHeader = () => {
    return (
        <section id='home-video'>
            <video className='w-100' src='https://resca.thimpress.com/wp-content/uploads/2015/07/video11.mp4' preload='auto' loop="loop" muted="muted" autoPlay>
            </video>
            <div className="container">
                <div className='slide-content'>
                    <h2>Resca</h2>
                    <h1>Restaurant</h1>
                    <p>Lawrence & Frederick</p>
                    <div className='text-center'>
                        <button>Look menu</button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default VideoHeader