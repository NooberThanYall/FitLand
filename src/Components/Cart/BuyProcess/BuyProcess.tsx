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
            <p className={`icons-and-titles-process ${location.pathname === '/Cart' || '/GetAddress' || '/Payment' ? 'icon-on' : ''}`}><CiShoppingCart size={25} /> سبد خرید</p>

            {location.pathname === '/GetAddress' && (
                <img src='Imgs/blue-line-buy-process.png' className='img-line-buy-process' />
            )}

            {location.pathname === '/Payment' && (
                <img src='Imgs/blue-line-buy-process.png' className='img-line-buy-process' />
            )}

            {location.pathname === '/Cart' && (
                <img src='Imgs/process-line.png' className='img-line-buy-process' />
            )}

            {location.pathname === '/GetAddress' && (
                <p className='icons-and-titles-process icon-on'><CiLocationOn size={25} /> ثبت نشانی</p>
            )}

            {location.pathname === '/Payment' && (
                <p className='icons-and-titles-process icon-on'><CiLocationOn size={25} /> ثبت نشانی</p>
            )}

            {location.pathname === '/Cart' && (
                <p className='icons-and-titles-process'><CiLocationOn size={25} /> ثبت نشانی</p>
            )}

            <img src={`${location.pathname === '/Payment' ? 'Imgs/blue-line-buy-process.png' : 'Imgs/process-line.png'}`} className='img-line-buy-process' />
            <p className={`icons-and-titles-process ${location.pathname === '/Payment' ? 'icon-on' : ''}`}><TfiWallet size={20} /> پرداخت</p>
        </div>
    )
}
