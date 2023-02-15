import React from 'react';
import Menu from '../components/Home/Menu';
import CoffeeStory from '../components/HomeCoffee/CoffeeStory';
import CoffeeTable from '../components/HomeCoffee/CoffeeTable';
import HomeCoffeeHeader from '../components/HomeCoffee/HomeCoffeeHeader';
import OurPlace from '../components/HomeCoffee/OurPlace';

const HomeCoffee = () => {
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