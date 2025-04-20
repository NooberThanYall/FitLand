import React from 'react'
import './TopBar.css'
import { CiSearch } from "react-icons/ci";
import { CiUser } from "react-icons/ci";
import { CiShoppingBasket } from "react-icons/ci";



export default function TopBar() {
    return (
        <div className='container'>
            <div className="container-top-bar">


                <div className="container-btn-login-and-btn-cart-top-bar">
                    <button className='btn-cart-top-bar'><CiShoppingBasket size={25} className='icon-basket-top-bar' /></button>
                    <button className='btn-auth-top-bar'> <CiUser className='icon-user-top-bar' size={20} /> ثبت‌نام | ورود </button>
                </div>

                <div className="container-search-box-top-bar">
                    <input type="text" placeholder='جستجو' className='input-search-top-bar' />
                    <CiSearch className='icon-search-top-bar' size={20} />
                </div>

                <div className="container-logo-top-bar">
                    <img src="Logo/logo.png" />
                </div>

            </div>
        </div>
    )
}
