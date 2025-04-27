import './AboutSell.css'
import './mediaAboutSell.css'
import { TbTruckDelivery } from "react-icons/tb";
import { RiPaypalLine } from "react-icons/ri";
import { GoHome } from "react-icons/go";

export default function AboutSell() {
    return (
        <div className='container'>
            <div className="container-about-sell">

                <div className="container-text-about-sell">
                    <p className="title-about-sell">با بیش از ده سال سابقه فروش لوازم ورزشی و لباس های ورزشی</p>
                </div>

                <div className="cards">
                    <div className="card-about-sell">
                        <TbTruckDelivery size={40} />
                        ارسال سریع
                    </div>
                    <div className="card-about-sell">
                        <RiPaypalLine size={40} />
                        پرداخت قسطی
                    </div>
                    <div className="card-about-sell">
                        <GoHome size={40} />
                        پرداخت در منزل
                    </div>
                </div>

            </div>
        </div>
    )
}
