import './NewShoes.css'
import './mediaNewShoes.css'

export default function NewShoes() {
    return (
        <div className='container'>
            <div className="container-new-shoes">

                <p className="title-new-shoes">جدید ترین کفش های ورزشی </p>

                <div className="container-cards-new-shoes">

                    <div className="cards-new-shoes">
                        <img src="Imgs/img-new-shoes-1.png" className='img-new-shoes-card' />
                        <p className="title-product-card-new-shoes">نایک مدل AO-14</p>
                        <p className="price-product-card-new-shoes">۳۰۰,۰۰۰ تومان</p>
                        <p className="size-product-card-new-shoes">از سایز L تا XXL</p>
                        <img src="Imgs/colors.png" className='img-color-products-new-shoes' />
                    </div>

                    <div className="cards-new-shoes">
                        <img src="Imgs/img-new-shoes-2.png" className='img-new-shoes-card' />
                        <p className="title-product-card-new-shoes">کفش نایک 2024</p>
                        <p className="price-product-card-new-shoes">۲۰۰,۰۰۰ تومان</p>
                        <p className="size-product-card-new-shoes">از سایز L تا XXL</p>
                        <img src="Imgs/colors.png" className='img-color-products-new-shoes' />
                    </div>

                    <div className="cards-new-shoes hider-new-shoes">
                        <img src="Imgs/img-new-shoes-3.png" className='img-new-shoes-card' />
                        <p className="title-product-card-new-shoes">کفش نایک مدل S-2000</p>
                        <p className="price-product-card-new-shoes">۲۰۰,۰۰۰ تومان</p>
                        <p className="size-product-card-new-shoes">از سایز L تا XXL</p>
                        <img src="Imgs/colors.png" className='img-color-products-new-shoes' />
                    </div>

                </div>

            </div>
        </div>
    )
}
