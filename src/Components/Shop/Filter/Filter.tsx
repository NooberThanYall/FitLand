import React, { useEffect, useState } from 'react'
import './Filter.css'
import './mediaFilter.css'
import './ToggelBtn.css'

type isShowFilterType = {
    isShowFilter: React.ReactNode
}

export default function Filter(isShowFilter: isShowFilterType) {

    const [isActive1, setIsActive1] = useState(false)
    const [isActive2, setIsActive2] = useState(false)
    const [isActive3, setIsActive3] = useState(false)
    const [isActive4, setIsActive4] = useState(false)
    const [isActive5, setIsActive5] = useState(false)
    const [isActive6, setIsActive6] = useState(false)
    const [isActive7, setIsActive7] = useState(false)

    return (
        <div className={`container-filter ${isShowFilter.isShowFilter ? 'active-container-filter' : ''}`}>

            <p className="title-filter">فیلترها</p>

            <div className="container-toggel-off-products-filter">
                <p className='title-toggel-off-products-filter'>محصولات تخفیف دار </p>
                <div className='toggler'>
                    <input id="toggler-1" name="toggler-1" type="checkbox" defaultValue={1} />
                    <label htmlFor="toggler-1">
                        <svg className="toggler-on" version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 130.2 130.2">
                            <polyline className="path check" points="100.2,40.2 51.5,88.8 29.8,67.5" />
                        </svg>
                        <svg className="toggler-off" version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 130.2 130.2">
                            <line className="path line" x1="34.4" y1="34.4" x2="95.8" y2="95.8" />
                            <line className="path line" x1="95.8" y1="34.4" x2="34.4" y2="95.8" />
                        </svg>
                    </label>
                </div>
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
                <div className="container-brand-product-filter">
                    <button className={`btns-brand-filter ${isActive6 ? 'btns-brand-filter-active' : ''}`} onClick={() => setIsActive6(!isActive6)}>Nike</button>
                    <button className={`btns-brand-filter ${isActive7 ? 'btns-brand-filter-active' : ''}`} onClick={() => setIsActive7(!isActive7)}>Puma</button>
                </div>
            </div>

            <button className='btn-submit-filter'>اعمال فیلترها</button>

        </div>
    )
}