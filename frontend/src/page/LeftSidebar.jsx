import React, { useEffect } from 'react'
import LeftSidebarContent from '../components/LeftSidebar/LeftSidebarContent'
import LeftSidebarHeader from '../components/LeftSidebar/LeftSidebarHeader'

const LeftSidebar = () => {

    useEffect(() => {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: "smooth"
        })
    }, [])

    return (
        <div>
            <LeftSidebarHeader />
            <LeftSidebarContent />
        </div>
    )
}

export default LeftSidebar