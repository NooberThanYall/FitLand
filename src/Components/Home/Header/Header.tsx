import './Header.css'
import './mediaHeader.css'
import { FaArrowLeft } from "react-icons/fa";
import { BsShopWindow } from "react-icons/bs";
import { AiOutlineLike } from "react-icons/ai";
import { MdOutlineDateRange } from "react-icons/md";
import { Link } from 'react-router';


export default function Header() {
    return (
        <div className='container'>
            <div className="container-header">

                <div className="container-header-right">
                    <p className="subtitle-header-right">راحت و مطمئن خرید کنید!</p>
                    <h3 className="fisrt-title-header-right">همراه تو در مسیر سلامتی</h3>
                    <h3 className="sec-title-header-right">سهم بزرگ خودتان را امروز بگیرید! </h3>
                    <p className="des-header-right">بزرگترین حراج فصل فیت لند همین حالا شرع کن و محصولات با یه تخفیف شگفت انگیز بخر!</p>
                    <Link className='btn-header-right' to={'/Shop'}>مشاهده  محصولات <FaArrowLeft className='icon-btn-header' /></Link>
                </div>

                <div className="container-header-main">
                    <img src="Imgs/img-header.png" className='img-header' />
                </div>

                <div className="container-header-left">
                    <div className="container-header-left-childes">
                        <BsShopWindow className='icon-header-left' size={30} />
                        <div className="text-container"> ۳۰۰  +<br /> <abbr style={{ color: '#404040', fontSize: '16px' }}> محوصلات متنوع </abbr></div>
                    </div>

                    <div className="container-header-left-childes">
                        <AiOutlineLike className='icon-header-left' size={30} />
                        <div className="text-container"> % ۹۵ <br /> <abbr style={{ color: '#404040', fontSize: '16px' }}> رضایت مشتری </abbr></div>
                    </div>

                    <div className="container-header-left-childes">
                        <MdOutlineDateRange className='icon-header-left' size={30} />
                        <div className="text-container">۴ روز  <br /> <abbr style={{ color: '#404040', fontSize: '16px' }}> از خرید تا دریافت </abbr></div>
                    </div>
                </div>
            </div>
        </div>
    )
}
