import React from 'react'
import './TopBar.css'
import { CiSearch } from "react-icons/ci";
import { CiUser } from "react-icons/ci";
import { GiBasket } from "react-icons/gi";


export default function TopBar() {
    return (
        <div className='container'>
            <div className="container-top-bar">


                <div className="container-btn-login-and-btn-cart-top-bar">
                    <button className='btn-cart-top-bar'><GiBasket /></button>
                    <button className='btn-auth-top-bar'> <CiUser className='icon-user-top-bar' /> ثبت‌نام | ورود </button>
                </div>

                <div className="container-search-box-and-logo-top-bar">
                    <input type="text" placeholder='جستجو' className='input-search-top-bar' />
                    <CiSearch className='icon-search-top-bar' />
                    
                    <div className="container-logo-top-bar">
                        <img src="Logo/logo.png" />
                    </div>
                </div>

            </div>
        </div>
    )
}
