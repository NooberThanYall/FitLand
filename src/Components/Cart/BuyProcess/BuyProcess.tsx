import './BuyProcess.css'
import './mediaBuyProcess.css'
import { CiShoppingCart } from "react-icons/ci";
import { CiLocationOn } from "react-icons/ci";
import { TfiWallet } from "react-icons/tfi";
import { useLocation } from 'react-router';

export default function BuyProcess() {

    let location = useLocation()

    return (
        <div className="container-icons-process">
            <p className={`icons-and-titles-process ${location.pathname === '/Cart' || '/GetAddress' ? 'icon-on' : ''}`}><CiShoppingCart size={25} /> سبد خرید</p>
            <img src={`${location.pathname === '/GetAddress' ? 'Imgs/blue-line-buy-process.png' : 'Imgs/process-line.png'}`} className='img-line-buy-process' />
            <p className={`icons-and-titles-process ${location.pathname === '/GetAddress' ? 'icon-on' : ''}`}><CiLocationOn size={25} /> ثبت نشانی</p>
            <img src="Imgs/process-line.png" className='img-line-buy-process' />
            <p className='icons-and-titles-process'><TfiWallet size={20} /> پرداخت</p>
        </div>
    )
}
