import { Link } from 'react-router'
import './LoginForm.css'
import './mediaLoginForm.css'

export default function LoginForm() {
  return (
    <div className="container">
      <div className="form-login">

        <form className="container-inputs">
          <h3 className="title-form">ورود</h3>

          <input type="text" className="inputs-login" placeholder="نام و نام خانوادگی" />

          <input type="number" className="inputs-login" placeholder="شماره موبایل" />

          <input type="email" className="inputs-login" placeholder="ایمیل (اختیاری)" />

          <button className="btn-login" type="submit">ورود</button>

          <p className="text-go-to-login">حساب کاربری ندارید؟ <Link to={''} className='link-go-to-sign-in'>ثبت نام کنید</Link></p>
        </form>

        <div className="container-img-login">
          <img src="Imgs/img-form-1.png" className="img-login" />
        </div>

      </div>
    </div>
  )
}
