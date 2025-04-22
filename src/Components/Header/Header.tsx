import React from 'react'
import './Header.css'
import './mediaHeader.css'
import { FaArrowLeft } from "react-icons/fa";


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
            </div>
        </div>
    )
}
