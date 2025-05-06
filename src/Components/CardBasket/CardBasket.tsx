import './CardBasket.css'
import './mediaCardBasket.css'
import { MdDeleteOutline } from "react-icons/md";

export default function CardBasket() {

    return (
        <div className='basket-card-wraper'>
            <img src="Imgs/img-product.png" className='img-card-basket' />
            <p className="name-product-basket">تیشرت زنانه</p>
            <p className="price-product-basket">600,000 تومان</p>
            <div className="container-sie-and-count-product-in-basket">
                <p className="count-product">تعداد: <abbr style={{fontWeight: '700'}}>2</abbr></p>
                <p className="size-product-basket">سایز: <abbr style={{fontWeight: '700'}}>M</abbr></p>
                <MdDeleteOutline className='icon-remove-product-from-basket' size={25} />
            </div>
        </div>
    )
}