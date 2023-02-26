import React from 'react'
import '../../styles/homeWinery/wineryStory.css';
import seafoodStory1 from '../../images/wineryStory1.webp'
import seafoodStory2 from '../../images/wineryStory2.webp'
const WineryStory = () => {
    return (
        <section id="winery-story">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-xl-10 col-lg-10 col-md-12 col-sm-12 col-xs-12 my-3">
                        <div className='winery-story-header'>
                            <h2>Our</h2>
                            <h1>STORY</h1>
                            <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem
                                Ipsum is that it has a more-or-less normal.Cras id leo aliquet, dictum orci at, varius ligula. Duis aliquet pellentesque tincidunt.
                                Vestibulum finibus augue sit amet ex elementum, non consequat libero mattis.</p>
                            <button>READ MORE</button>
                        </div>
                    </div>
                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-xs-12 my-4">
                        <div className='seafood-story-img'>
                            <img className='seafood-image' src={seafoodStory1} alt="" />
                        </div>
                    </div>
                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-xs-12 my-4">
                        <div className='seafood-story-img'>
                            <img className='seafood-image' src={seafoodStory2} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default WineryStory