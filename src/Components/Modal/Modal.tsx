import './Modal.css'
import './mediaModal.css'
import { IoIosCloseCircleOutline } from "react-icons/io";
import { FaRegEye } from "react-icons/fa";
import React from 'react';
import { Link } from 'react-router';

type setIsShowModalProps = {
  setIsShowModal: React.ReactNode
}


export default function Modal({ setIsShowModal }: setIsShowModalProps) {
    
  return (
    <div className='modal-wraper'>
      <div className="container-title-and-close-btn-modal">
        <p className="title-modal">این کالا به سبد خریدت اضافه شد!</p>
        <IoIosCloseCircleOutline className='btn-close-modal' size={20} onClick={() => setIsShowModal(false)}  />
      </div>
      <img src="Imgs/Line-modal.png" className='line-modal' />
      <div className="container-img-and-name-product0in-modal">
        <img src="Imgs/img-product.png" className='img-product-modal' />
        <p className="name-product-modal">تیشرت زنانه</p>
      </div>
      <Link className='see-cart-btn' to={'/Cart'} onClick={() => setIsShowModal(false)}>مشاهده سبد خرید <FaRegEye size={20} /></Link>
    </div>
  )
}
