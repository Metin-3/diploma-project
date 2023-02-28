import React, { useEffect } from 'react'
import ShopContent from '../components/Shop/ShopContent'
import ShopHeader from '../components/Shop/ShopHeader'

const Shop = () => {

    useEffect(() => {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: "smooth"
        })
    }, [])

    return (
        <>
            <ShopHeader />
            <ShopContent />
        </>
    )
}

export default Shop