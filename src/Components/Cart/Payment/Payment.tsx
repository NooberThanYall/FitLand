import BuyProcess from '../BuyProcess/BuyProcess'
import CardsInvoice from '../CardsInvoice/CardsInvoice'
import './Payment.css'
import './mediaPayment.css'

export default function Payment() {
    return (
        <div className='container'>
            <div className="contaienr-invoice-and-address">

                <p className="title-invoice">فاکتور محصولات</p>
                <div className="container-invoice">
                    <CardsInvoice />
                    <CardsInvoice />
                    <CardsInvoice />
                </div>

                <div className="contaienr-user-address">
                    <img src="Imgs/img-map.png" className='img-map' />
                    <div className="container-detail-address">
                        <p className="title-user-address">آدرس شما</p>
                        <p className="main-address">کوردستان, مهاباد,خیابان آزادی</p>
                        <p className="users-city">کوردستان - مهاباد</p>
                        <p className="users-phone-number">09149582599</p>
                        <p className="users-name">شایان جعفرنژاد</p>
                    </div>
                </div>

                <div className="container-submit-buy">
                    <BuyProcess />
                    <button className="btn-final-buy">پرداخت</button>
                </div>

            </div>
        </div>
    )
}
