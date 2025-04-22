import React from 'react'
import './NavBar.css'
import './mediaNavBar.css'
import { CiStar } from "react-icons/ci";
import { AiOutlineThunderbolt } from "react-icons/ai";
import { TbShoppingCartStar } from "react-icons/tb";

export default function NavBar() {
  return (
    <div className='container'>
      <div className="container-nav-bar">
        <div className="container-nav-right">
          <button className="links-nav-bar">مردانه</button>
          <button className="links-nav-bar">زنانه</button>
          <button className="links-nav-bar">بچگانه</button>
          <button className="links-nav-bar">لوازم ورزشی</button>
        </div>
        <div className="container-nav-left">
          <button className="links-nav-bar"> <CiStar size={18} className='icon-nav-bar'/>جدید ترین محصولات</button>
          <button className="links-nav-bar"> <AiOutlineThunderbolt size={18} className='icon-nav-bar'/>تخفیفات ویژه</button>
          <button className="links-nav-bar"> <TbShoppingCartStar size={18} className='icon-nav-bar'/>پرفروش ترین ها</button>
        </div>
      </div>
    </div>
  )
}
