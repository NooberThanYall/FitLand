import { Link } from 'react-router';
import './SuccessfulPurchase.css'
import './mediaSuccessfulPurchase.css'
import { FiHome } from "react-icons/fi";

export default function SuccessfulPurchase() {
  return (
    <div className='container'>
        <div className="container-SuccessfulPurchase">

            <div className="container-texts-SuccessfulPurchase">
                <p className="title-SuccessfulPurchase">سفارش شما با موفقیت انجام شد</p>
                <p className="desc-SuccessfulPurchase">در تاریخ معین شده منتظر سفارش خود باشید!</p>
                <p className="buy-code-SuccessfulPurchase">کد رهگیری سفارش: 045162516</p>
                <Link className="btn-SuccessfulPurchase" to={'/'}>صفحه اصلی <FiHome size={20} /></Link>
            </div>

            <div className="container-img-SuccessfulPurchase">
                <img src="Imgs/img-SuccessfulPurchase.png" className='img-SuccessfulPurchase' />
            </div>
        </div>
    </div>
  )
}
