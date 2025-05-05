import './CardBasket.css'
import './mediaCardBasket.css'
import { MdDeleteOutline } from "react-icons/md";

export default function CardBasket() {

    return (
        <div className='basket-card-wraper'>
            <div className="container-img-and-size-and-count">
                <img src="Imgs/img-product.png" className='img-card-basket' />
                <p className="size-product-basket">M</p>
                <p className="size-product-basket">L</p>
                <p className="size-product-basket">XXL</p>
                <p className="count-product">تعداد: 2</p>
            </div>
            <div className="container-name-and-price-product-basket">
                <MdDeleteOutline />
                <p className="name-product-basket">تیشرت زنانه</p>
                <p className="price-product-basket">600,000 تومان</p>
            </div>
        </div>
    )
}