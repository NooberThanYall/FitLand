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
        </div>

      </div>
    </div>
  )
}
