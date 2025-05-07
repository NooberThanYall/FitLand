import React from 'react'
import './CardsInvoice.css'
import './mediaCardsInvoice.css'

export default function CardsInvoice() {
    return (
        <div className="container-box-invoice">
            <img src="Imgs/img-product.png" className='img-product-invoice' />
            <div className="container-products-info">
                <p className="name-product-in-invoice">تیشرت زنانه</p>
                <div className="container-detailes-product-in-invoice">
                    <p className="size-in-invoice">سایز M</p>
                    <p className="count-in-invoice">تعداد 1</p>
                    <p className="price-in-invoice">600,000 تومان</p>
                </div>
            </div>
        </div>
    )
}
