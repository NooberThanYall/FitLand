import { Link } from 'react-router'
import './CardsShop.css'
import './mediaCardsShop.css'

export default function CardsShop() {
    return (
        <div className='container-card-shop'>
            <img src="Imgs/img-product.png" className="img-card-shop" />
            <p className="title-card-shop">تیشرت زنانه</p>
            <p className="size-card-shop">از سایز M تا 3XL</p>
            <p className="price-card-shop">400,000 تومان</p>
            <img src="Imgs/colors.png" className='colors-card-shop' />
            <Link className='btn-submit-card-shop' to={'/MainProduct'}>افزودن به سبد خرید</Link>
        </div>
    )
}
