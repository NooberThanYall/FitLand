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
  const [isShowMore, setIsShowMore] = useState<boolean>(false)
  const [showMore, setShowMore] = useState<string>('نمایش بیشتر')
  const [showless, setShowless] = useState<string>('نمایش کمتر')
  const [showDot, setShowDot] = useState<string>('...')
  const [infoProduct, setInfoProduct] = useState<string>('یکی از دلایلی که باعث شده نایک به انتخاب اول تمامی ورزشکار های دنیا تبدیل شود. تکنولوژی ها و ویژگی های پیشرفته ای است که نایکی در تولید کفش های خود از آن بهره میبرد. کفش های نایک علاوه بر داشتن تکنولوژی هایی مانند Nike Air, Zoomx, Nike React و … دارای برخی ویژگی ها مثل وزن سبک، انعطاف پذیری بالا، تنفس پذیری و قابلیت تهویه هوا، بازگشت انرژی و راحتی فوق العاده است که در ادامه به آنها میپردازیم. ...اما توجه داشته باشید که تنها کفش های نایک اصل دارای چنین مشخصاتی هستند و کفش های کپی، های کپی، کوالی مستر و … فاقد هر گونه تکنولوژی و فناوری هستند و تنها ظاهر نمونه اورجینال کفش را تولید میکنند. اگر قصد خرید کفش نایک اصل را دارید یا میخواهید از اصل بودن کفش نایک خود مطمئن شوید توصیه میکنیم مقاله تشخیص کفش نایک اصل را مطالعه کنید.')

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
            <FaRegHeart size={20} onClick={() => setIsLiked(!isLiked)} className={`icon-like-product ${isLiked ? 'like-active' : ''}`} />
          </div>
        </div>

      </div>

      <div className="container-product-info">
        <p className="text-info-product">{isShowMore ? infoProduct.slice(0, 729) : infoProduct.slice(0, 306)}{!isShowMore && showDot}</p>
        <button className='btn-show-more-less-text-product-info' onClick={() => setIsShowMore(!isShowMore)}>{isShowMore ? showless : showMore}</button>
      </div>

    </div>
  )
}
