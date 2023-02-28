import React, { useEffect } from 'react'
import ContactContent from '../components/Contact/ContactContent'
import ContactHeader from '../components/Contact/ContactHeader'

const Contact = () => {

    useEffect(() => {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: "smooth"
        })
    }, [])

    return (
        <>
            <ContactHeader />
            <ContactContent />
        </>
    )
}

export default Contact