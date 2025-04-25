import './MostSell.css'
import './mediaMostSell.css'
import { FaArrowLeft } from "react-icons/fa";

export default function MostSell() {
    return (
        <div className='container'>
            <div className="container-card-most-sell">

                <div className="first-card-most-sell">
                    <img src="Imgs/img-most-sell-1.png" className='img-card-most-sell' />
                    <img src="Imgs/blue-img.png" className='img-blue-most-sell' />
                    <p className='des-cards'><abbr style={{ color: '#FC9877' }}>۵۰ ٪</abbr> تخفیف روی تمام محصولات </p>
                    <p className='des-cards'>جدید ترین تخفیفات فصل برند پوما</p>
                </div>

                <div className="sec-card-most-sell">
                    <img src="Imgs/img-most-sell-2.png" className='img-card-most-sell' />
                    <img src="Imgs/blue-img.png" className='img-blue-most-sell' />
                    <p className='des-cards'><abbr style={{ color: '#FC9877' }}>۵۰ ٪</abbr> تخفیف روی تمام محصولات </p>
                    <p className='des-cards'>جدید ترین تخفیفات فصل برند نایک</p>
                </div>

                <div className="container-most-sell-left">
                    <h1 className='title-most-sell-left'>پر فروش ترین محصولات</h1>
                    <p className="desc-most-sell-left">پرفروش ترین محصولات با ارسال رایگان تهیه کنید و در سریع ترین زمان درب منزل تحویل بگیرید.</p>
                    <button className="btn-most-sell-left">مشاهده همه محصولات <FaArrowLeft className='icon-btn-most-sell' /></button>
                </div>
            </div>
        </div>
    )
}
