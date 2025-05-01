import { useState } from 'react'
import Filter from '../Filter/Filter'
import './Shop.css'
import './mediaShop.css'
import CardsShop from '../CardsShop/CardsShop'

export default function Shop() {

  const [isShowFilter, setIsShowFilter] = useState(false)

  return (
    <div className='container'>
      <div className="container-shop">

        <div className="container-filter-at-shop">
          <button className={`open-filter-btn ${isShowFilter ? 'open-filter-btn-active' : ''}`} onClick={() => setIsShowFilter(!isShowFilter)}>فیلتر</button>
          <Filter isShowFilter={isShowFilter} />
        </div>

        <div className="container-cards">
          <CardsShop />
        </div>

      </div>
    </div>
  )
}