import React from 'react'
import '../../styles/homeWinery/wineryHave.css'
import have1 from '../../images/wineryHave.jpg'
import have2 from '../../images/wineryHave2.webp'
import have3 from '../../images/wineryHave3.webp'

const WineryHave = () => {
    return (
        <section id="seafood-menu">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-12">
                        <div className='winery-menu-header'>
                            <h2>We</h2>
                            <h1>HAVE</h1>
                        </div>
                    </div>
                    <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6 col-xs-12 my-3">
                        <div className='winery-menu-card'>
                            <div className='winery-menu-card-img'>
                                <img src={have1} alt="" />
                            </div>
                            <div className='winery-menu-card-content'>
                                <h5>CHAMPAGNE</h5>
                                <p>Praesent tincidunt venenatis augue, vitae imperdiet ligula tristique aliquet condimentum et nunc ut, euismod tincidunt ipsum.</p>
                                <button>READ MORE</button>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6 col-xs-12 my-3">
                        <div className='winery-menu-card'>
                            <div className='winery-menu-card-img'>
                                <img src={have2} alt="" />
                            </div>
                            <div className='winery-menu-card-content'>
                                <h5>WINES</h5>
                                <p>Praesent tincidunt venenatis augue, vitae imperdiet ligula tristique aliquet condimentum et nunc ut, euismod tincidunt ipsum.</p>
                                <button>READ MORE</button>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6 col-xs-12 my-3">
                        <div className='winery-menu-card'>
                            <div className='winery-menu-card-img'>
                                <img src={have3} alt="" />
                            </div>
                            <div className='winery-menu-card-content'>
                                <h5>BEER</h5>
                                <p>Praesent tincidunt venenatis augue, vitae imperdiet ligula tristique aliquet condimentum et nunc ut, euismod tincidunt ipsum.</p>
                                <button>READ MORE</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section >
    )
}

export default WineryHave