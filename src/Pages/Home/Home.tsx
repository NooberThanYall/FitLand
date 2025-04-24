import React from 'react'
import Header from '../../Components/Header/Header'
import NewBrand from '../../Components/NewBrand/NewBrand'
import VipOffer from '../../Components/VipOffer/VipOffer'
import NewShoes from '../../Components/NewShoes/NewShoes'
import ImgBike from '../../Components/ImgBike/ImgBike'

export default function Home() {
  return (
    <div>
        <Header />
        <NewBrand />
        <VipOffer />
        <NewShoes />
        <ImgBike />
    </div>
  )
}
