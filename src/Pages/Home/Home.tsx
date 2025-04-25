import Header from '../../Components/Home/Header/Header'
import NewBrand from '../../Components/Home/NewBrand/NewBrand'
import VipOffer from '../../Components/Home/VipOffer/VipOffer'
import NewShoes from '../../Components/Home/NewShoes/NewShoes'
import ImgBike from '../../Components/Home/ImgBike/ImgBike'
import VipOffBike from '../../Components/Home/VipOffBike/VipOffBike'
import MostSell from '../../Components/Home/MostSell/MostSell'

export default function Home() {
  return (
    <div>
        <Header />
        <NewBrand />
        <VipOffer />
        <NewShoes />
        <ImgBike />
        <VipOffBike />
        <MostSell />
    </div>
  )
}
