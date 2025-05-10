import './VipOffBike.css'
import './mediaVipOffBike.css'

export default function VipOffBike() {
  return (
            <div className='container'>
                <div className="container-off-bike">
    
                    <p className="title-off-bike">تخفیفات ویژه</p>
    
                    <div className="container-cards-off-bike">
    
                        <div className="cards-off-bike">
                            <img src="Imgs/img-bike-1.png" className='img-off-bike-card' />
                            <p className="title-product-card-off-bike">اسکوتر مدل A-155</p>
                            <p className="price-product-card-off-bike">۳۰۰,۰۰۰ تومان</p>
                            <p className="size-product-card-off-bike">از سایز L تا XXL</p>
                            <img src="Imgs/colors.png" className='img-color-products-off-bike' />
                        </div>
    
                        <div className="cards-off-bike">
                            <img src="Imgs/img-bike-2.png" className='img-off-bike-card' />
                            <p className="title-product-card-off-bike">دوچرخه مدل S-2000</p>
                            <p className="price-product-card-off-bike">۲۰۰,۰۰۰ تومان</p>
                            <p className="size-product-card-off-bike">از سایز L تا XXL</p>
                            <img src="Imgs/colors.png" className='img-color-products-off-bike' />
                        </div>
    
                        <div className="cards-off-bike hider-off-bike">
                            <img src="Imgs/img-bike-3.png" className='img-off-bike-card' />
                            <p className="title-product-card-off-bike">دوچرخه مدل AO-14</p>
                            <p className="price-product-card-off-bike">۲۰۰,۰۰۰ تومان</p>
                            <p className="size-product-card-off-bike">از سایز L تا XXL</p>
                            <img src="Imgs/colors.png" className='img-color-products-off-bike' />
                        </div>
    
                    </div>
    
                </div>
            </div>
  )
}
