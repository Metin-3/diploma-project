import React, { useEffect } from 'react'
import BookTable from '../components/Home/BookTable'
import Events from '../components/Home/Events'
import Header from '../components/Home/Header'
import Menu from '../components/Home/Menu'
import New from '../components/Home/New'


const Home = () => {

    useEffect(() => {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: "smooth"
        })
    }, [])

    return (
        <>
            <Header />
            <BookTable />
            <Menu />
            <Events />
            <New />
        </>
    )
}

export default Home