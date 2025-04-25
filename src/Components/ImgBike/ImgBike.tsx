import { FaArrowLeft } from 'react-icons/fa'
import './ImgBike.css'
import './mediaImgBike.css'

export default function ImgBike() {
  return (
    <div className='container'>

        <img src="Imgs/img-bike.png" className='img-bike' />
        
      <div className="container-texts-img-bike">
        <p className="sub-title-img-bike">برای لذت بردن از مسیر</p>
        <h3 className='title-img-bike'>دوچرخه، اسکیت و اسکوتر بگیر</h3>
        <button className='btn-img-bike'>مشاهده همه محصولات <FaArrowLeft /></button>
      </div>

    </div>
  )
}