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
            <button className='btn-submit-card-shop'>افزودن به سبد خرید</button>
        </div>
    )
}
