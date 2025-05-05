import CardBasket from '../CardBasket/CardBasket'
import './Cart.css'
import './mediaCart.css'

export default function Cart() {
  return (
    <div className='container'>
      <div className="container-cards-in-shop">
        <CardBasket />
        <CardBasket />
        <CardBasket />
      </div>
    </div>
  )
}
