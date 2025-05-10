import './Page404.css'
import './mediaPage404.css'
import { FiHome } from "react-icons/fi";
import { Link } from 'react-router';

export default function Page404() {
  return (
    <div className='container'>
      <div className="container-page-404">
        <img src="Imgs/img-404.png" className='img-page-404' />
        <p className="text-page-404">متاسفانه صفحه مورد نظر پیدا نشد :(</p>
        <Link className="btn-page-404" to={'/'}>صفحه اصلی <FiHome size={20} /></Link>
      </div>
    </div>
  )
}
