import React, { useEffect } from 'react'

const Features = () => {

    useEffect(() => {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: "smooth"
        })
    }, [])

    return (
        <div>Features</div>
    )
}

export default Features