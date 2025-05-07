import { Link } from 'react-router';
import BuyProcess from '../BuyProcess/BuyProcess'
import './GetAddress.css'
import './mediaGetAddress.css'
import { FaArrowLeftLong } from "react-icons/fa6";

export default function GetAddress() {
  return (
    <div className='container'>
      <div className="container-get-address">
        <p className="sub-title-address">آدرس ارسال</p>
        <p className="title-address">ابتدا آدرس خود را تکمیل کنید</p>

        <div className="container-inputs-address">
          <div className='div-inputss'>
            <input type="text" placeholder='استان' className='inpts-address' />
            <input type="text" placeholder='شهر' className='inpts-address' />
          </div>
          <div className='div-inputss'>
            <input type="text" placeholder='خیابان' className='inpts-address' />
            <input type="number" placeholder='پلاک' className='inpts-address' />
          </div>
          <div className='div-inputss'>
            <input type="number" placeholder='واحد' className='inpts-address' />
            <input type="number" placeholder='کد پستی' className='inpts-address' />
          </div>
        </div>

        <BuyProcess />

        <div className="container-submit-address">
          <p className="title-submit-address">در انتخاب آدرس دقت فرمایید</p>
          <Link className="btn-submit-address" to={'/Payment'}>تکمیل فرایند خرید <FaArrowLeftLong /></Link>
        </div>

      </div>
    </div>
  )
}
