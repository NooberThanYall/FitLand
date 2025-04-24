import React from 'react'
import './VipOffer.css'
import './mediaVipOffer.css'
import { FaArrowLeft } from "react-icons/fa";

export default function VipOffer() {
    return (
        <div className='container'>
            <div className="container-vip-off">

                <p className="title-vip-off">تخفیفات ویژه</p>
                <p className="see-all-btn">مشاهده همه <FaArrowLeft size={15} /></p>

                <div className="container-cards-vip-off">

                    <div className="cards-vip-off">
                        <img src="Imgs/img-1-vip-off.jpg" className='img-vip-off-card' />
                        <p className="title-product-card-vip-off">سویشرت نایک مدل AO-14</p>
                        <p className="price-product-card-vip-off">۳۰۰,۰۰۰ تومان</p>
                        <p className="size-product-card-vip-off">از سایز L تا XXL</p>
                        <img src="Imgs/colors.png" className='img-color-products' />
                    </div>

                    <div className="cards-vip-off">
                        <img src="Imgs/img-2-vip-off.png" className='img-vip-off-card' />
                        <p className="title-product-card-vip-off">ست نایک مدل S-2000</p>
                        <p className="price-product-card-vip-off">۲۰۰,۰۰۰ تومان</p>
                        <p className="size-product-card-vip-off">از سایز L تا XXL</p>
                        <img src="Imgs/colors.png" className='img-color-products'/>
                    </div>

                    <div className="cards-vip-off hider">
                        <img src="Imgs/img-3-vip-off.png" className='img-vip-off-card' />
                        <p className="title-product-card-vip-off">کفش نایک مدل S-2000</p>
                        <p className="price-product-card-vip-off">۲۰۰,۰۰۰ تومان</p>
                        <p className="size-product-card-vip-off">از سایز L تا XXL</p>
                        <img src="Imgs/colors.png" className='img-color-products'/>
                    </div>

                </div>

            </div>
        </div>
    )
}
