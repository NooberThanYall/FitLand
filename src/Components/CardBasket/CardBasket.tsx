import './CardBasket.css'
import './mediaCardBasket.css'
import { MdDeleteOutline } from "react-icons/md";

export default function CardBasket() {

    return (
        <div className='card-basket-wrraper'>

            <div className="container-img-basket">
                <img src="Imgs/img-product.png" className='img-basket' />
            </div>

            <div className="container-details-card-basket">
                <div className="container-name-and-icon-delete">
                    <p className="title-card-basket">تیشرت زنانه</p>
                    <MdDeleteOutline className='icon-delete-card-at-basket' size={25} />
                </div>
                <p className="new-price-card-basket">۶۰۰,۰۰۰ تومان</p>
                <p className="last-price-card-basket">1,200,000</p>
                <p className="title-size-card-basket">سایز</p>
                <div className="container-sizes-card-basket">
                    <p className="sizes-card-basket">M</p>
                    <p className="sizes-card-basket">L</p>
                    <p className="sizes-card-basket">XL</p>
                </div>
                <p className='title-count-at-basket'>تعداد: 2</p>
            </div>

        </div>
    )
}