import React from 'react'
import { Outlet } from 'react-router-dom'
import AdminNav from './components/Navbar/AdminNav'
import WelcomeAdmin from './components/Welcome/WelcomeAdmin'

const Admin = () => {
    return (
        <div>
            <AdminNav />
            <Outlet />
            <WelcomeAdmin />
        </div>
    )
}

export default Admin