import React, { useEffect } from 'react';
import RegisterContent from '../components/RegisterUser/RegisterContent';
import RegisterHeader from '../components/RegisterUser/RegisterHeader';

const RegisterUser = () => {

    useEffect(() => {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: "smooth"
        })
    }, [])
    return (
        <>
            <RegisterHeader />
            <RegisterContent />
        </>
    )
}

export default RegisterUser