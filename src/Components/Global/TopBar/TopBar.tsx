import './TopBar.css'
import './mediaTopBar.css'
import { CiSearch } from "react-icons/ci";
import { CiUser } from "react-icons/ci";
import { CiShoppingBasket } from "react-icons/ci";
import { Link } from 'react-router';



export default function TopBar() {
    return (
        <div className='container'>
            <div className="container-top-bar">

                <div className="container-logo-top-bar">
                    <img src="Logo/logo.png" className='logo' />
                </div>

                <div className="container-search-box-top-bar">
                    <CiSearch className='icon-search-top-bar' size={20} />
                    <input type="text" placeholder='جستجو' className='input-search-top-bar' />
                </div>

                <div className="container-btn-login-and-btn-cart-top-bar">
                    <Link className='btn-auth-top-bar' to={'/SignIn'}> <CiUser className='icon-user-top-bar' size={20} /> ثبت‌نام | ورود </Link>
                    <Link className='btn-cart-auth-for-taplet-mode' to={'/SignIn'}><CiUser className='icon-user-top-bar-for-taplet-mode' size={25} /></Link>
                    <Link className='btn-cart-top-bar' to={'/Shop'}><CiShoppingBasket size={25} className='icon-basket-top-bar' /></Link>
                </div>

            </div>
        </div >
    )
}
