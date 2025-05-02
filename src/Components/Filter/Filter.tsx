import React, { useState } from 'react'
import ToggelBtn from '../ToggelBtn/ToggelBtn'
import './Filter.css'
import './mediaFilter.css'

type isShowFilterType = {
    isShowFilter: React.ReactNode
}

export default function Filter(isShowFilter: isShowFilterType) {

    const [isActive1, setIsActive1] = useState(false)
    const [isActive2, setIsActive2] = useState(false)
    const [isActive3, setIsActive3] = useState(false)
    const [isActive4, setIsActive4] = useState(false)
    const [isActive5, setIsActive5] = useState(false)

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
                    <button className={`btns-size-filter ${isActive1 ? 'btns-size-filter-active' : ''}`} onClick={() => setIsActive1(!isActive1)}>XXL</button>
                    <button className={`btns-size-filter ${isActive2 ? 'btns-size-filter-active' : ''}`} onClick={() => setIsActive2(!isActive2)}>XL</button>
                    <button className={`btns-size-filter ${isActive3 ? 'btns-size-filter-active' : ''}`} onClick={() => setIsActive3(!isActive3)}>L</button>
                    <button className={`btns-size-filter ${isActive4 ? 'btns-size-filter-active' : ''}`} onClick={() => setIsActive4(!isActive4)}>M</button>
                    <button className={`btns-size-filter ${isActive5 ? 'btns-size-filter-active' : ''}`} onClick={() => setIsActive5(!isActive5)}>S</button>
                </div>
            </div>

            <div className="container-brand-filter">
                <p className="title-brand-filter">برند:</p>
                <input type="text" placeholder='جستجو' className='input-brand-filter' />
            </div>

            <button className='btn-submit-filter'>اعمال فیلترها</button>

        </div>
    )
}