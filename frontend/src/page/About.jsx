import React, { useEffect } from 'react'
import AboutGallery from '../components/About/AboutGallery'
import AboutHeader from '../components/About/AboutHeader'
import AboutSince from '../components/About/AboutSince'
import AboutStandards from '../components/About/AboutStandards'

const About = () => {
    useEffect(() => {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: "smooth"
        })
    }, [])
    return (
        <>
            <AboutHeader />
            <AboutSince />
            <AboutStandards />
            <AboutGallery />
        </>
    )
}

export default About