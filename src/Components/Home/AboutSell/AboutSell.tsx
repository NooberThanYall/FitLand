import './AboutSell.css'
import './mediaAboutSell.css'
import { TbTruckDelivery } from "react-icons/tb";
import { RiPaypalLine } from "react-icons/ri";
import { GoHome } from "react-icons/go";

export default function AboutSell() {
    return (
        <div className='container'>
            <div className="container-about-sell">

                <div className="card-about-sell">
                    <TbTruckDelivery />
                    ارسال سریع
                </div>
                <div className="card-about-sell">
                    <RiPaypalLine />
                    پرداخت قسطی
                </div>
                <div className="card-about-sell">
                    <GoHome />
                    پرداخت درب منزل
                </div>

                <p className="title-about-sell">با بیش از ده سال سابقه فروش لوازم ورزشی و لباس های ورزشی</p>
            </div>
        </div>
    )
}
