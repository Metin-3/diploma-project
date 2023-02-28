import React, { useEffect } from 'react'
import GalleryContent from '../components/Gallery/GalleryContent'
import GalleryHeader from '../components/Gallery/GalleryHeader'

const Gallery = () => {

    useEffect(() => {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: "smooth"
        })
    }, [])

    return (
        <>
            <GalleryHeader />
            <GalleryContent />
        </>
    )
}

export default Gallery