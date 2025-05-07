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
                    <p className="main-address">بجنورد, میدان شهید, بین شهید و 17 شهریور ,کوچه عزیز مصر ,پلاک 13 </p>
                    <p className="users-city">خراسان شمالی - بجنورد</p>
                    <p className="users-phone-number">09149582599</p>
                    <p className="users-name">شایان جعفرنژاد</p>
                </div>
            </div>
        </div>
    )
}
