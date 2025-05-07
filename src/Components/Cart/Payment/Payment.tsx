import './Payment.css'
import './mediaPayment.css'

export default function Payment() {
    return (
        <div className='container'>
            <div className="contaienr-invoice-and-address">
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

                <div className="contaienr-user-address">
                    <p className="main-address">بجنورد, میدان شهید, بین شهید و 17 شهریور ,کوچه عزیز مصر ,پلاک 13 </p>
                    <p className="users-city">خراسان شمالی - بجنورد</p>
                    <p className="users-phone-number">09149582599</p>
                    <p className="users-name">شایان جعفرنژاد</p>
                </div>
            </div>
        </div>
    )
}
