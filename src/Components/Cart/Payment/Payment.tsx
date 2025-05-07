import './Payment.css'
import './mediaPayment.css'

export default function Payment() {
    return (
        <div className='container'>
            <p className="title-invoice">فاکتور محصولات</p>

            <div className="container-invoice">
                <div className="line-1-product-invoice">

                    <div className="container-box-invoice">
                        <img src="Imgs/img-product.png" className='img-product-invoice' />
                        <p className="name-product-in-invoice">تیشرت زنانه</p>
                        <div className="container-detailes-product-in-invoice">
                            <p className="size-in-invoice">سایز M</p>
                            <p className="count-in-invoice">تعداد 1</p>
                            <p className="price-in-invoice">600,000 تومان</p>
                        </div>
                    </div>


                </div>
            </div>
        </div>
    )
}
