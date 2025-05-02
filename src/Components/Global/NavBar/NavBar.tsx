import './NavBar.css'
import './mediaNavBar.css'
import { CiStar } from "react-icons/ci";
import { AiOutlineThunderbolt } from "react-icons/ai";
import { TbShoppingCartStar } from "react-icons/tb";
import { Link, useLocation } from 'react-router';

export default function NavBar() {

  let location = useLocation()

  return (
    <div className='container'>
      <div className="container-nav-bar">
        <div className="container-nav-right">
          <Link className={`links-nav-bar ${location.pathname === '/' ? 'links-nav-bar-activ' : ''}`} to={'/'}>خانه</Link>
          <Link to={'/Shop'} className={`links-nav-bar ${location.pathname === '/Shop' ? 'links-nav-bar-activ' : ''}`}>همه محصولات</Link>
          <button className="links-nav-bar">مردانه</button>
          <button className="links-nav-bar">زنانه</button>
        </div>
        <div className="container-nav-left">
          <button className="links-nav-bar"> <CiStar size={18} className='icon-nav-bar' />جدید ترین محصولات</button>
          <button className="links-nav-bar"> <AiOutlineThunderbolt size={18} className='icon-nav-bar' />تخفیفات ویژه</button>
          <button className="links-nav-bar"> <TbShoppingCartStar size={18} className='icon-nav-bar' />پرفروش ترین ها</button>
        </div>
      </div>
    </div>
  )
}
