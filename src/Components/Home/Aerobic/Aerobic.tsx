import { FaArrowLeft } from 'react-icons/fa'
import './Aerobic.css'
import './mediaAerobic.css'

export default function Aerobic() {
  return (
        <div className='container'>
          <div className="container-img-Aerobic">
    
            <div className="container-texts-img-Aerobic">
              <p className="sub-title-img-Aerobic">برای حال خوب</p>
              <h3 className='title-img-Aerobic'>لوازم ایروبیک و تناسب اندام بگیر</h3>
              <button className='btn-img-Aerobic'>مشاهده همه محصولات <FaArrowLeft /></button>
            </div>
    
            <div className="container-img">
              <img src="Imgs/Aerobic-img.png" className='img-Aerobic' />
            </div>
    
          </div>
        </div>
  )
}
