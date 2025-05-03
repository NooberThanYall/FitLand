import './ProductDetails.css'
import './mediaProductDetails.css'
import { FiPlus } from "react-icons/fi";
import { FiMinus } from "react-icons/fi";
import { LuShoppingCart } from "react-icons/lu";
import { FaRegHeart } from "react-icons/fa";
import { useState } from 'react';


export default function ProductDetails() {

  const [countProduct, setCountProduct] = useState<number>(1)

  const [isLiked, setIsLiked] = useState<boolean>(false)

  const minusProductCount = () => {
    if (countProduct > 1) {
      setCountProduct(countProduct - 1)
    }
  }
  
  return (
    <div className='container'>
      <div className="container-main-product">

        <div className="container-img-main-product">
          <img src="Imgs/img-product.png" className='img-main-product' />
        </div>

        <div className="container-details-main-product">
          <p className="title-product-main-product">تیشرت زنانه</p>
          <p className="new-price-product-main-product">۶۰۰,۰۰۰ تومان</p>
          <div className="container-off-last-price-main-product">
            <p className="last-price-product-main-product">1,200,000</p>
            <p className="off-product-main-product">50%</p>
          </div>
          <p className="title-size-main-product">سایز</p>
          <div className="container-sizes-main-product">
            <p className="sizes-main-product">M</p>
            <p className="sizes-main-product">L</p>
            <p className="sizes-main-product">XL</p>
          </div>
          <div className="container-add-and-remove-product">
            <div className="plus-minus-product-main-product"><FiPlus style={{ cursor: 'pointer' }} onClick={() => setCountProduct(countProduct + 1)} /> {countProduct} <FiMinus style={{ cursor: 'pointer' }} onClick={minusProductCount} /></div>
            <button className='btn-add-product-to-cart-main-product'>افزودن به سبد خرید <LuShoppingCart size={20} /></button>
            <FaRegHeart size={20}  onClick={() => setIsLiked(!isLiked)} className={`icon-like-product ${isLiked ? 'like-active' : ''}`} />
          </div>
        </div>

      </div>
    </div>
  )
}
