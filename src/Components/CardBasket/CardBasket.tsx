import './CardBasket.css'
import './mediaCardBasket.css'
import { MdDeleteOutline } from "react-icons/md";

export default function CardBasket() {

    return (
        <div className='basket-card-wraper'>
            <img src="Imgs/img-product.png" className='img-card-basket' />

            <div className="container-product-info-basket">
                <p className="name-product-basket">تیشرت زنانه</p>
                <p className="price-product-basket">600,000 تومان</p>
                <p className="count-product">تعداد: 2</p>
                <div className="container-sizes">
                    <p className="size-product-basket">M</p>
                    <p className="size-product-basket">L</p>
                    <p className="size-product-basket">XXL</p>
                </div>
                <MdDeleteOutline className='icon-remove-product-from-basket' size={25} />
            </div>

        </div>
    )
}