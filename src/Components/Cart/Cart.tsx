import BuyProcess from '../BuyProcess/BuyProcess'
import CardBasket from '../CardBasket/CardBasket'
import './Cart.css'
import './mediaCart.css'


export default function Cart() {

  return (
    <div className='container'>
      <p className='title-basket'>سبد خرید</p>
      <div className="container-basket">

        <div className="container-cards-in-shop">
          <CardBasket />
          <CardBasket />
          <CardBasket />
        </div>

        <div className="container-buy-process">
          <BuyProcess />

          <div className="container-list-prices-basket">
            <p className="prices-product-basket">قیمت کالا ۲۴۰.۰۰۰ تومان</p>
            <p className="send-price">هزینه ارسال ۵۰.۰۰۰ تومان</p>
            <img src="Imgs/Line-modal.png" className='line-prices-list-basket' />
            <p className="total-price-basket">مبلغ قابل پرداخت ۲۹۰.۰۰۰ تومان</p>
            <button className='btn-submit-pruches'>تکمیل فرایند خرید</button>
          </div>

        </div>

      </div>
    </div>
  )
}
