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
          <input type="text" placeholder='استان' />
          <input type="text" placeholder='شهر'  />
          <input type="text" placeholder='خیابان'  />
          <input type="text" placeholder='پلاک'  />
          <input type="text" placeholder='واحد'  />
          <input type="text" placeholder='کد پستی'  />
        </div>

        <BuyProcess />
        <div className="container-submit-address">
          <p className="title-submit-address">در انتخاب آدرس و همچنین انتخاب روز ارسال دقت فرمایید</p>
          <button className="btn-submit-address">تکمیل فرایند خرید <FaArrowLeftLong /></button>
        </div>
      </div>
    </div>
  )
}
