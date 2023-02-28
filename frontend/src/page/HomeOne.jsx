import React, { useEffect } from 'react'
import Menu from '../components/Home/Menu'
import CoffeeStory from '../components/HomeCoffee/CoffeeStory'
import CoffeeTable from '../components/HomeCoffee/CoffeeTable'
import OneGallery from '../components/HomeOne/OneGallery'
import OneHeader from '../components/HomeOne/OneHeader'

const HomeOne = () => {

    useEffect(() => {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: "smooth"
        })
    }, [])

    return (
        <>
            <OneHeader />
            <CoffeeStory />
            <Menu />
            <OneGallery />
            <CoffeeTable />
        </>
    )
}

export default HomeOne