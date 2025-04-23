import React from 'react'
import './NewBrand.css'
import './mediaNewBrand.css'
import { FaArrowLeft } from "react-icons/fa";

export default function NewBrand() {
    return (
        <div className='container'>
            <div className="container-card-new-brand">

                <div className="first-card-new-brand">
                    <img src="Imgs/fisrt-img-new-brand.jpg" className='img-card-new-brand' />
                    <img src="Imgs/blue-img.png" className='img-blue-new-brand' />
                    <p className='des-cards'><abbr style={{color: '#FC9877'}}>۵۰ ٪</abbr> تخفیف روی تمام محصولات </p>
                    <p className='des-cards'>جدید ترین تخفیفات فصل برند پوما</p>
                </div>

                <div className="sec-card-new-brand">
                    <img src="Imgs/sec-img-new-brand.jpg" className='img-card-new-brand' />
                    <img src="Imgs/blue-img.png" className='img-blue-new-brand' />
                    <p className='des-cards'><abbr style={{color: '#FC9877'}}>۵۰ ٪</abbr> تخفیف روی تمام محصولات </p>
                    <p className='des-cards'>جدید ترین تخفیفات فصل برند نایک</p>
                </div>

                <div className="container-new-brand-left">
                    <h1 className='title-new-brand-left'>جدید ترین محصولات</h1>
                    <p className="desc-new-brand-left">جدید ترین محصولات با ارسال رایگان تهیه کنید و در سریع ترین زمان درب منزل تحویل بگیرید </p>
                    <button className="btn-new-brand-left">مشاهده همه محصولات <FaArrowLeft className='icon-btn-new-brand' /></button>
                </div>
            </div>
        </div>
    )
}
