import React from 'react'
import './Header.css'
import './mediaHeader.css'
import { FaArrowLeft } from "react-icons/fa";
import { CiShop } from "react-icons/ci";
import { AiOutlineLike } from "react-icons/ai";
import { MdOutlineDateRange } from "react-icons/md";


export default function Header() {
    return (
        <div className='container'>
            <div className="container-header">

                <div className="container-header-right">
                    <p className="subtitle-header-right">راحت و مطمئن خرید کنید!</p>
                    <h3 className="fisrt-title-header-right">همراه تو در مسیر سلامتی</h3>
                    <h3 className="sec-title-header-right">سهم بزرگ خودتان را امروز بگیرید! </h3>
                    <p className="des-header-right">بزرگترین حراج فصل فیت لند همین حالا شرع کن و محصولات با یه تخفیف شگفت انگیز بخر!</p>
                    <button className='btn-header-right'>مشاهده  محصولات <FaArrowLeft className='icon-btn-header' /></button>
                </div>
                
                <div className="container-header-main">
                    <img src="Imgs/img-header.png" className='img-header' />
                </div>

                <div className="container-header-left">
                    <div className="container-header-left-childes">
                        <CiShop />
                        <div className="text-container">+ ۳۰۰ <br /> محصولات متنوع</div>
                    </div>

                    <div className="container-header-left-childes">
                        <AiOutlineLike />
                        <div className="text-container">۹۵ % <br /> رضایت مشتری</div>
                    </div>

                    <div className="container-header-left-childes">
                        <MdOutlineDateRange />
                        <div className="text-container">۴ روز  <br /> از خرید تا دریافت</div>
                    </div>
                </div>
            </div>
        </div>
    )
}
