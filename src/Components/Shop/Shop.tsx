import { useState } from 'react'
import Filter from '../Filter/Filter'
import './Shop.css'
import './mediaShop.css'

export default function Shop() {

  const [isShowFilter, setIsShowFilter] = useState(false)

  return (
    <div className='container'>
      <button className={`open-filter-btn ${isShowFilter ? 'open-filter-btn-active' : ''}`} onClick={() => setIsShowFilter(!isShowFilter)}>فیلتر</button>
      <Filter isShowFilter={isShowFilter} />
    </div>
  )
}