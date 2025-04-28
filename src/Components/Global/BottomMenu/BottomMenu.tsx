import './BottomMenu.css'
import './mediaBottomMenu.css'
import { IoHomeOutline } from "react-icons/io5";
import { CiUser } from "react-icons/ci";
import { CiShoppingBasket } from "react-icons/ci";
import { LiaTshirtSolid } from "react-icons/lia";
import { MdKeyboardArrowUp } from "react-icons/md";
import { Link } from 'react-router';


export default function BottomMenu() {

    return (
        <div className='container'>
            <MdKeyboardArrowUp className='icon-open-bottom-menu' size={30} />
            <div className='container-bottom-menu'>
                <button className="btn-icons"><IoHomeOutline className='icons-bottom-menu' size={30} /></button>
                <Link className="btn-icons" to={'/SignIn'}><CiUser className='icons-bottom-menu' size={30} /></Link>
                <button className="btn-icons"><CiShoppingBasket className='icons-bottom-menu' size={30} /></button>
                <button className="btn-icons"><LiaTshirtSolid className='icons-bottom-menu' size={30} /></button>
            </div>
        </div>
    )
}
