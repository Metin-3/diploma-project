import React, { useEffect } from 'react'
import BlogContent from '../components/Blog/BlogContent'
import BlogHeader from '../components/Blog/BlogHeader'

const Blog = () => {
    useEffect(() => {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: "smooth"
        })
    }, [])
    return (
        <>
            <BlogHeader />
            <BlogContent />
        </>
    )
}

export default Blog