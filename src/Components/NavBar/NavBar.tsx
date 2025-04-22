import React from 'react'
import './NavBar.css'

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
        <div className="container-nav-مثبف">
          <button className="links-nav-bar">جدید ترین محصولات</button>
          <button className="links-nav-bar">تخفیفات ویژه</button>
          <button className="links-nav-bar">پرفروش ترین ها</button>
        </div>
      </div>
    </div>
  )
}
