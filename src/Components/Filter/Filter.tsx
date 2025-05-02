import React from 'react'
import ToggelBtn from '../ToggelBtn/ToggelBtn'
import './Filter.css'
import './mediaFilter.css'

type isShowFilterType = {
    isShowFilter: React.ReactNode
}

export default function Filter(isShowFilter: isShowFilterType) {
    
    return (
        <div className={`container-filter ${isShowFilter.isShowFilter ? 'active-container-filter' : ''}`}>

            <div className="container-title-filter">
                <p className="title-filter">فیلترها</p>
                <button className="remove-all-filter-btn">حذف فیلترها</button>
            </div>

            <div className="container-toggel-off-products-filter">
                <p className='title-toggel-off-products-filter'>محصولات تخفیف دار </p>
                <ToggelBtn />
            </div>

            <div className="container-price-filter">
                <p className="title-price-filter">قیمت:</p>
                <input type="text" placeholder='بیشترین' className='input-price-filter' />
            </div>

            <div className="container-size-filter">
                <p className="title-size-filter">سایز:</p>
                <div className="container-btns-sizes">
                    <button className="btns-size-filter">XXL</button>
                    <button className="btns-size-filter">XL</button>
                    <button className="btns-size-filter">L</button>
                    <button className="btns-size-filter">M</button>
                    <button className="btns-size-filter">S</button>
                </div>
            </div>

            <div className="container-brand-filter">
                <p className="title-brand-filter">برند:</p>
                <input type="text" placeholder='جستجو' className='input-brand-filter' />
            </div>

        </div>
    )
}
