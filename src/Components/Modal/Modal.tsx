import './Modal.css'
import './mediaModal.css'
import { IoMdCloseCircle } from "react-icons/io";
import { FaRegEye } from "react-icons/fa";


export default function Modal() {
  return (
    <div className='modal-wraper'>
        <div className="container-title-and-close-btn-modal">
            <p className="title-modal">این کالا به سبد خریدت اضافه شد!</p>
            <IoMdCloseCircle className='btn-close-modal' size={20} />
        </div>
        <img src="Imgs/Line-modal.png" className='line-modal'/>
        <div className="container-img-and-name-product0in-modal">
            <img src="Imgs/img-product.png" className='img-product-modal' />
            <p className="name-product-modal">تیشرت زنانه</p>
        </div>
        <button className='see-cart-btn'>مشاهده سبد خرید <FaRegEye size={20} /></button>
    </div>
  )
}
