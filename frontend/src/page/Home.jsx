import React from 'react'
import BookTable from '../components/Home/BookTable'
import Events from '../components/Home/Events'
import Header from '../components/Home/Header'
import Menu from '../components/Home/Menu'
import New from '../components/Home/New'

const Home = () => {
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