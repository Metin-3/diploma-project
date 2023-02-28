import React, { useEffect } from 'react'
import LoginContent from '../components/LoginUser/LoginContent'
import LoginHeader from '../components/LoginUser/LoginHeader'

const LoginUser = () => {
    useEffect(() => {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: "smooth"
        })
    }, [])
    return (
        <>
            <LoginHeader />
            <LoginContent />
        </>
    )
}

export default LoginUser