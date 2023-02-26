import React from 'react'
import Menu from '../components/Home/Menu'
import CoffeeStory from '../components/HomeCoffee/CoffeeStory'
import CoffeeTable from '../components/HomeCoffee/CoffeeTable'
import OneGallery from '../components/HomeOne/OneGallery'
import OneHeader from '../components/HomeOne/OneHeader'

const HomeOne = () => {
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