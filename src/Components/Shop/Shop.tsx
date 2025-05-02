import { useState } from 'react'
import Filter from '../Filter/Filter'
import './Shop.css'
import './mediaShop.css'
import CardsShop from '../CardsShop/CardsShop'
import { FaFilter } from "react-icons/fa6";

export default function Shop() {

  const [isShowFilter, setIsShowFilter] = useState(false)

  return (
    <div className='container'>
      <div className="container-shop">

        <div className="container-filter-at-shop">
          <button className={`open-filter-btn ${isShowFilter ? 'open-filter-btn-active' : ''}`} onClick={() => setIsShowFilter(!isShowFilter)}>فیلتر <FaFilter /></button>
          <Filter isShowFilter={isShowFilter} />
        </div>

        <div className="container-cards">
          <CardsShop />
          <CardsShop />
          <CardsShop />
          <CardsShop />
          <CardsShop />
          <CardsShop />
        </div>

      </div>
    </div>
  )
}