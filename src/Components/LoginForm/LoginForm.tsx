import './LoginForm.css'
import './mediaLoginForm.css'

export default function LoginForm() {
  return (
    <div className="container">
      <div className="form-login">

        <div className="container-img-login">
          <img src="Imgs/img-form-1.png" className="img-login" />
        </div>

        <form className="container-inputs">
          <h3 className="title-form">ورود</h3>

          <input type="text" className="inputs-login" placeholder="نام و نام خانوادگی" />

          <input type="number" className="inputs-login" placeholder="شماره موبایل" />

          <input type="email" className="inputs-login" placeholder="ایمیل (اختیاری)" />

          <button className="btn-login" type="submit">ورود</button>

          <p className="link-go-to-login"> حساب کاربری ندارید؟ ثبت نام کنید </p>
        </form>

      </div>
    </div>
  )
}
