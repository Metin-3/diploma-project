import React from 'react'
import { Outlet } from 'react-router-dom'
import AdminNav from '../page/Admin/components/Navbar/AdminNav'

const AdminRoot = () => {
    return (
        <div>
            <AdminNav />
            <Outlet />
        </div>
    )
}

export default AdminRoot