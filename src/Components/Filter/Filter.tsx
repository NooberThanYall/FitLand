import ToggelBtn from '../ToggelBtn/ToggelBtn'
import './Filter.css'
import './mediaFilter.css'

export default function Filter() {
    return (
        <div className="container-shop">

            <div className="container-filter">

                <div className="container-title-filter">
                    <p className="title-filter">فیلترها</p>
                    <button className="remove-all-filter-btn">حذف فیلترها</button>
                </div>

                <div className="container-toggel-off-products-filter">
                    <p className='title-toggel-off-products-filter'>محصولات تخفیف دار </p>
                    <ToggelBtn />
                </div>

                <div className="container-price-filter">
                    <p className="title-price-filter">قیمت</p>
                    <input type="text" placeholder='بیشترین' className='input-price-filter' />
                </div>

                <div className="container-size-filter">
                    <p className="title-size-filter">سایز</p>
                    <button className="btns-size-filter">S</button>
                    <button className="btns-size-filter">M</button>
                    <button className="btns-size-filter">L</button>
                    <button className="btns-size-filter">XL</button>
                    <button className="btns-size-filter">XXL</button>
                </div>

                <div className="container-brand-filter">
                    <p className="title-brand-filter">برند</p>
                    <input type="text" placeholder='جستجو' className='input-brand-filter' />
                </div>

            </div>
        </div>
    )
}
