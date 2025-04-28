import { Link } from 'react-router'
import './LoginForm.css'
import './mediaLoginForm.css'
import { IoIosArrowForward } from "react-icons/io";
import { useNavigate, useLocation } from 'react-router';

export default function LoginForm() {

  const navigate = useNavigate()
  const location = useLocation()

  const goToHomePageHandler = () => {
    navigate('/')
  }


  if (location.pathname == '/Login') {
    document.body.className = 'noScroll-login'
  }

  return (
    <div className='container'>

      <IoIosArrowForward className='icon-back-lgoin' size={20} onClick={goToHomePageHandler} />

      <div className="form-login">

        <form className="container-inputs-login">
          <h3 className="title-form">ورود</h3>

          <input type="text" className="inputs-login" placeholder="نام و نام خانوادگی" />

          <input type="number" className="inputs-login" placeholder="شماره موبایل" />

          <button className="btn-login" type="submit">ورود</button>

          <p className="text-go-to-login">حساب کاربری ندارید؟ <Link to={'/SignIn'} className='link-go-to-sign-in'>ثبت نام کنید</Link></p>
        </form>

        <div className="container-img-login">
          <img src="Imgs/img-form-1.jpg" className="img-login" />
        </div>

      </div>
    </div>
  )
}
