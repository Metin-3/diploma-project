import React, { useState } from 'react'
import '../../styles/coming/coming.css';
import logoComing from '../../images/logo2.webp';


const Coming = () => {

    let time = new Date().toLocaleTimeString();
    let timeMinutes = new Date().getMinutes()
    let timeHours = new Date().getHours()
    let day = new Date().getDate()

    const [seconds, setSeconds] = useState(time);
    const [minutes, setMinutes] = useState(timeMinutes);
    const [hours, setHours] = useState(timeHours);

    const updateSeconds = () => {
        let time = new Date().getSeconds();
        setSeconds(time);
    };

    const updateMinutes = () => {
        let timeMinutes = new Date().getMinutes();
        setMinutes(timeMinutes)
    }

    const updateHours = () => {
        let timeHours = new Date().getHours();
        setHours(timeHours);
    }

    setInterval(updateSeconds, 1000);
    setInterval(updateMinutes, 1);
    setInterval(updateHours, 1);
    return (
        <section id="coming">
            <video src='https://resca.thimpress.com/wp-content/uploads/2015/07/video11.mp4' preload='auto' loop="loop" muted="muted" autoPlay>
            </video>
            <div className='coming-content'>
                <div>
                    <img src={logoComing} alt="" />
                </div>
                <p>Resca includes blank pages so you can build all kinds of
                    awesome stuff as coming soon page!</p>
                <div className='coming-date'>
                    <div>{day} <span>Day</span></div>
                    <div>{hours} <span>Hours</span></div>
                    <div>{minutes} <span>Minutes</span></div>
                    <div>{seconds} <span>Seconds</span></div>
                </div>
                <form action="">
                    <input type="email" />
                    <button>SIGN IN</button>
                </form>
            </div>
        </section >
    )
}

export default Coming