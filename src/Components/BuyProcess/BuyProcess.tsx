import './BuyProcess.css'
import { CiShoppingCart } from "react-icons/ci";
import { BiLocationPlus } from "react-icons/bi";
import { TfiWallet } from "react-icons/tfi";
import { useLocation } from 'react-router';

export default function BuyProcess() {

    let location = useLocation()

    return (
        <div className="container-icons-process">
            <p className={`icons-and-titles-process ${location.pathname === '/Cart' ? 'icon-on' : ''}`}><CiShoppingCart size={25} /> سبد خرید</p>
            <img src="Imgs/process-line.png" />
            <p className='icons-and-titles-process'><BiLocationPlus size={25} /> ثبت نشانی</p>
            <img src="Imgs/process-line.png" />
            <p className='icons-and-titles-process'><TfiWallet size={20} /> پرداخت</p>
        </div>
    )
}
