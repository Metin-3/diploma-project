import React, { useEffect } from 'react'
import RightSidebarContent from '../components/RightSidebar/RightSidebarContent'
import RightSidebarHeader from '../components/RightSidebar/RightSidebarHeader'

const RightSidebar = () => {

    useEffect(() => {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: "smooth"
        })
    }, [])

    return (
        <>
            <RightSidebarHeader />
            <RightSidebarContent />
        </>
    )
}

export default RightSidebar