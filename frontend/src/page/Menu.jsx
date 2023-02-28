import React, { useEffect } from 'react'
import Breakfast from '../components/Menu/Breakfast'
import Chef from '../components/Menu/Chef'
import Dinner from '../components/Menu/Dinner'
import FoodDrink from '../components/Menu/FoodDrink'
import Lunch from '../components/Menu/Lunch'
import MenuHeader from '../components/Menu/MenuHeader'

const Menu = () => {

    useEffect(() => {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: "smooth"
        })
    }, [])

    return (
        <>
            <MenuHeader />
            <FoodDrink />
            <Chef />
            <Dinner />
            <Lunch />
            <Breakfast />
        </>
    )
}

export default Menu