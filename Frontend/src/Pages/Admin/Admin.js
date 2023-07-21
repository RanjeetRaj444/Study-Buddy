import React, { useEffect } from 'react'
import { NavLink, Route, Routes } from 'react-router-dom'
import Dashboard from './Dashboard'
import Product from './Product'
import Users from './Users'
import UserLog from './UserLog'
import style from './Admin.module.css'

export default function Admin() {

    return (
        <div className={style.adminPageDiv}>
            <div className={style.homeDiv}>
                <nav className={style.NavDiv}>
                    <div className={style.logoDiv}>
                        <img src="https://www.studybuddy.me/site2/img/studybuddy_logo.png" alt="Study Buddy" />
                    </div>
                    <NavLink className={({ isActive }) => isActive ? `${style.Active}` : `${style.notActive}`} to="/admin/dashboard"><span className="material-symbols-outlined">home</span><span>Dashboard</span></NavLink>
                    <NavLink className={({ isActive }) => isActive ? `${style.Active}` : `${style.notActive}`} to="/admin/product"><span className="material-symbols-outlined">inventory</span><span>Product</span></NavLink>
                    <NavLink className={({ isActive }) => isActive ? `${style.Active}` : `${style.notActive}`} to="/admin/users"><span className="material-symbols-outlined">group</span><span>Users</span></NavLink>
                    <NavLink className={({ isActive }) => isActive ? `${style.Active}` : `${style.notActive}`} to="/admin/userLog"><span className="material-symbols-outlined">verified_user</span><span>UserLog</span></NavLink>
                </nav>
                <div className={style.rightDiv}>
                    <Routes>
                        <Route exact path='/dashboard' element={<Dashboard />} />
                        <Route path='/product' element={<Product />} />
                        <Route path='/users' element={<Users />} />
                        <Route path='/userLog' element={<UserLog />} />
                    </Routes>
                </div>
            </div>
        </div>
    )
}
