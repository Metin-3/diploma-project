import React, { useEffect } from 'react';
import Menu from '../components/Home/Menu';
import CoffeeStory from '../components/HomeCoffee/CoffeeStory';
import CoffeeTable from '../components/HomeCoffee/CoffeeTable';
import HomeCoffeeHeader from '../components/HomeCoffee/HomeCoffeeHeader';
import OurPlace from '../components/HomeCoffee/OurPlace';

const HomeCoffee = () => {

    useEffect(() => {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: "smooth"
        })
    }, [])

    return (
        <>
            <HomeCoffeeHeader />
            <CoffeeStory />
            <Menu />
            <OurPlace />
            <CoffeeTable />
        </>
    )
}

export default HomeCoffee