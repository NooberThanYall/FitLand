import './BottomMenu.css'
import './mediaBottomMenu.css'
import { IoHomeOutline } from "react-icons/io5";
import { CiUser } from "react-icons/ci";
import { CiShoppingBasket } from "react-icons/ci";
import { LiaTshirtSolid } from "react-icons/lia";
import { Link, useLocation } from 'react-router';


export default function BottomMenu() {

    const location = useLocation()

    return (
        <div className='container'>
            <div className='container-bottom-menu'>
                <Link className="btn-icons" to={'/'}><IoHomeOutline className={`icons-bottom-menu ${location.pathname === '/' ? 'icons-bottom-menu-slected' : ''}`} size={30} /></Link>
                <Link className="btn-icons" to={'/SignIn'}> <CiUser className={`icons-bottom-menu ${location.pathname === '/SignIn' ? 'icons-bottom-menu-slected' : ''} ${location.pathname === '/Login' ? 'icons-bottom-menu-slected' : ''}`} size={30} /></Link>
                <button className="btn-icons"><CiShoppingBasket className='icons-bottom-menu' size={30} /></button>
                <button className="btn-icons"><LiaTshirtSolid className='icons-bottom-menu' size={30} /></button>
            </div>
        </div>
    )
}
