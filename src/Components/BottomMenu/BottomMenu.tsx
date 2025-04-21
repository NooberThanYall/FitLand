import React from 'react'
import './BottomMenu.css'
import './mediaBottomMenu.css'
import { CiUser } from "react-icons/ci";
import { CiShoppingBasket } from "react-icons/ci";

export default function BottomMenu() {
    return (
        <div className='container'>
            <div className="container-bottom-menu">
                <button className="btn-icons"><CiUser className='icons-bottom-menu' size={30} /></button>
                <button className="btn-icons"><CiUser className='icons-bottom-menu' size={30} /></button>
                <button className="btn-icons"><CiShoppingBasket className='icons-bottom-menu' size={30} /></button>
                <button className="btn-icons"><CiUser className='icons-bottom-menu' size={30} /></button>
            </div>
        </div>
    )
}
