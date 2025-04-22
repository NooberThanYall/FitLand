import React, { useState } from 'react'
import './BottomMenu.css'
import './mediaBottomMenu.css'
import { IoHomeOutline } from "react-icons/io5";
import { CiUser } from "react-icons/ci";
import { CiShoppingBasket } from "react-icons/ci";
import { LiaTshirtSolid } from "react-icons/lia";
import { MdKeyboardArrowUp } from "react-icons/md";


export default function BottomMenu() {

    const [show, setShow] = useState(false);

    const toggelModalHandler = () => {
        setShow((prev) => !prev);
    };

    return (
        <div className='container'>
            <MdKeyboardArrowUp className={`icon-open-bottom-menu ${show ? 'icon-go-top' : ''}`} onClick={toggelModalHandler} size={30} />
            <div className={`container-bottom-menu ${show ? '' : 'onShow'}`}>
                <button className="btn-icons"><LiaTshirtSolid className='icons-bottom-menu' size={30} /></button>
                <button className="btn-icons"><CiShoppingBasket className='icons-bottom-menu' size={30} /></button>
                <button className="btn-icons"><CiUser className='icons-bottom-menu' size={30} /></button>
                <button className="btn-icons"><IoHomeOutline className='icons-bottom-menu' size={30} /></button>
            </div>
        </div>
    )
}
