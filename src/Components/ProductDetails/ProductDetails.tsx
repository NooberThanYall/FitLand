import './ProductDetails.css'
import './mediaProductDetails.css'
import { FiPlus } from "react-icons/fi";
import { FaMinus } from 'react-icons/fa';
import { LuShoppingCart } from "react-icons/lu";

export default function ProductDetails() {
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
            <div className="plus-minus-product-main-product"><FiPlus /> 1 <FaMinus /></div>
            <button className='btn-add-product-to-cart-main-product'>افزودن به سبد خرید <LuShoppingCart /></button>
          </div>
        </div>

      </div>
    </div>
  )
}
