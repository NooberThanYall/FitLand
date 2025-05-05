import './CardBasket.css'
import './mediaCardBasket.css'
import { useState } from 'react'
import { FiPlus } from "react-icons/fi";
import { FiMinus } from "react-icons/fi";
import { MdDeleteOutline } from "react-icons/md";

export default function CardBasket() {

    const [countProduct, setCountProduct] = useState<number>(1)

    const minusProductCount = () => {
        if (countProduct > 1) {
            setCountProduct(countProduct - 1)
        }
    }


    return (
        <div className='card-basket-wrraper'>

            <div className="container-img-main-product">
                <img src="Imgs/img-product.png" className='img-main-product' />
            </div>

            <div className="container-name-and-icon-delete">
                <p className="title-card-basket">تیشرت زنانه</p>
                <MdDeleteOutline />
            </div>
            <p className="new-price-card-basket">۶۰۰,۰۰۰ تومان</p>
            <p className="last-price-card-basket">1,200,000</p>
            <p className="title-size-card-basket">سایز</p>
            <div className="container-sizes-card-basket">
                <p className="sizes-card-basket">M</p>
                <p className="sizes-card-basket">L</p>
                <p className="sizes-card-basket">XL</p>
            </div>
            <div className="plus-minus-card-basket"><FiPlus style={{ cursor: 'pointer' }} onClick={() => setCountProduct(countProduct + 1)} /> {countProduct} <FiMinus style={{ cursor: 'pointer' }} onClick={minusProductCount} /></div>
        </div>
    )
}
