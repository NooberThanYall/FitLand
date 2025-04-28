import { Link } from 'react-router'
import './SignInForm.css'
import './mediaSignInForm.css'
import { IoIosArrowForward } from "react-icons/io";
import { useNavigate, useLocation } from 'react-router';
import { useEffect } from 'react';

export default function SignInForm() {

    const navigate = useNavigate()
    const location = useLocation()

    const goToHomePageHandler = () => {
        navigate('/')
    }

    if (location.pathname == '/SignIn') {
        document.body.className = 'noScroll-signIn'
    }

    return (
        <div className="container">

            <IoIosArrowForward className='icon-back-sign-in' size={20} onClick={goToHomePageHandler} />

            <div className="form-sign-in">

                <form className="container-inputs-sign-in">
                    <h3 className="title-form">ثبت نام</h3>

                    <input type="text" className="inputs-sign-in" placeholder="نام و نام خانوادگی" />

                    <input type="number" className="inputs-sign-in" placeholder="شماره موبایل" />

                    <input type="email" className="inputs-sign-in" placeholder="ایمیل (اختیاری)" />

                    <button className="btn-sign-in" type="submit">ثبت نام</button>

                    <p className="text-go-to-login">حساب کاربری دارید؟ <Link to={'/Login'} className='link-go-to-login'>وارد شوید</Link></p>
                </form>

                <div className="container-img-sign-in">
                    <img src="Imgs/img-form-1.jpg" className="img-sign-in" />
                </div>

            </div>
        </div>
    )
}
