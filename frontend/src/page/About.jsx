import React from 'react'
import AboutGallery from '../components/About/AboutGallery'
import AboutHeader from '../components/About/AboutHeader'
import AboutSince from '../components/About/AboutSince'
import AboutStandards from '../components/About/AboutStandards'

const About = () => {
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