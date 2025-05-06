import CardBasket from '../CardBasket/CardBasket'
import './Cart.css'
import './mediaCart.css'
import { CiShoppingCart } from "react-icons/ci";
import { BiLocationPlus } from "react-icons/bi";
import { TfiWallet } from "react-icons/tfi";


export default function Cart() {
  return (
    <div className='container'>
      <div className="container-basket">

        <p className='title-basket'>سبد خرید</p>
        <div className="container-cards-in-shop">
          <CardBasket />
          <CardBasket />
          <CardBasket />
        </div>

        <div className="container-buy-process">
          <div className="container-icons-process">
            <p className='icons-and-titles-process'><CiShoppingCart /> سبد خرید</p>
            <img src="Imgs/process-line.png" />
            <p className='icons-and-titles-process'><BiLocationPlus /> ثبت نشانی</p>
            <img src="Imgs/process-line.png" />
            <p className='icons-and-titles-process'><TfiWallet /> پرداخت</p>
          </div>
        </div>
      </div>
    </div>
  )
}
