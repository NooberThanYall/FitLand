import { Link } from 'react-router'
import './SignInForm.css'
import './mediaSignInForm.css'

export default function SignInForm() {
    return (
        <div className="container">
            <div className="form-sign-in">

                <form className="container-inputs">
                    <h3 className="title-form">ثبت نام</h3>

                    <input type="text" className="inputs-sign-in" placeholder="نام و نام خانوادگی" />

                    <input type="number" className="inputs-sign-in" placeholder="شماره موبایل" />

                    <input type="email" className="inputs-sign-in" placeholder="ایمیل (اختیاری)" />

                    <button className="btn-sign-in" type="submit">ثبت نام</button>

                    <p className="text-go-to-Login">حساب کاربری دارید؟ <Link to={'/Login'} className='link-go-to-Login'>وارد شوید</Link></p>
                </form>

                <div className="container-img-sign-in">
                    <img src="Imgs/img-form-2.png" className="img-sign-in" />
                </div>

            </div>
        </div>
    )
}
