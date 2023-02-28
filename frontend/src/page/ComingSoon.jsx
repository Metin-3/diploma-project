import React, { useEffect } from 'react'
import Coming from '../components/Coming/Coming'

const ComingSoon = () => {
    useEffect(() => {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: "smooth"
        })
    }, [])
    return (
        <Coming />
    )
}

export default ComingSoon