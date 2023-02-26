import React from 'react'
import { Outlet } from 'react-router-dom'
import AdminNav from './components/Navbar/AdminNav'

const Admin = () => {
    return (
        <div>
            <AdminNav />
            <Outlet />
        </div>
    )
}

export default Admin