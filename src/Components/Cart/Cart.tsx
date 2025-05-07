import { Link } from 'react-router'
import BuyProcess from './BuyProcess/BuyProcess'
import CardBasket from './CardBasket/CardBasket'
import './Cart.css'
import './mediaCart.css'


export default function Cart() {

  return (
    <div className='container'>

      <p className='title-basket'>سبد خرید</p>
      <div className="container-cards-in-shop">
        <CardBasket />
        <CardBasket />
        <CardBasket />
        <CardBasket />
        <CardBasket />
        <CardBasket />
      </div>


      <div className="container-list-prices-and-buy-process">

        <BuyProcess />

        <div className="container-list-prices-basket">
          <p className="prices-product-basket"><abbr style={{ fontWeight: '500' }}>قیمت کالا</abbr> ۲۴۰.۰۰۰ تومان</p>
          <p className="send-price"><abbr style={{ fontWeight: '500' }}>هزینه ارسال</abbr> ۵۰.۰۰۰ تومان</p>
          <img src="Imgs/Line-modal.png" className='line-prices-list-basket' />
          <p className="total-price-basket"><abbr style={{ fontWeight: '500' }}>مبلغ قابل پرداخت</abbr> ۲۹۰.۰۰۰ تومان</p>
          <Link className='btn-submit-pruches' to={'/GetAddress'}>تکمیل فرایند خرید</Link>
        </div>

      </div>

    </div>
  )
}
