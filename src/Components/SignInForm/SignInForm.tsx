import { Link } from 'react-router'
import './SignInForm.css'
import './mediaSignInForm.css'
import { useNavigate } from 'react-router';
import { useEffect, useState } from 'react';

export default function SignInForm() {

    const navigate = useNavigate()

    const goToHomePageHandler = () => {
        navigate('/')
    }

    const [inputName, setInputName] = useState('')
    const [inputPhone, setInputPhone] = useState('')
    const [inputEmail, setInputEmail] = useState('')
    const [isNameValid, setIsNameValid] = useState(false)
    const [isPhoneValid, setIsPhoneValid] = useState(false)
    const [allValid, setAllValid] = useState(false)

    useEffect(() => {
        if (inputName.length < 5) {
            setIsNameValid(false)
        } else {
            setIsNameValid(true)
        }
    }, [inputName])

    useEffect(() => {
        if (inputPhone.length < 11 || inputPhone.length > 11) {
            setIsPhoneValid(false)
        } else {
            setIsPhoneValid(true)
        }
    }, [inputPhone])



    useEffect(() => {
        if (isNameValid == true && isPhoneValid == true) {
            setAllValid(true)
        } else {
            setAllValid(false)
        }
    })

    return (
        <div className="container">

            <p className='text-back-home-sign-in' onClick={goToHomePageHandler}>خانه</p>

            <div className="form-sign-in">

                <form className="container-inputs-sign-in">
                    <h3 className="title-form">ثبت نام</h3>

                    <input type="text" className={`inputs-sign-in ${isNameValid ? 'valid' : 'inValid'}`} placeholder="نام و نام خانوادگی" value={inputName} onChange={event => setInputName(event.target.value)} />

                    <input type="number" className={`inputs-sign-in ${isPhoneValid ? 'valid' : 'inValid'}`} placeholder="شماره موبایل" value={inputPhone} onChange={event => setInputPhone(event.target.value)} />

                    <input type="email" className="inputs-sign-in" placeholder="ایمیل (اختیاری)" value={inputEmail} onChange={event => setInputEmail(event.target.value)} />

                    <button className={`btn-sign-in ${allValid ? '' : 'btn-dont-work'}`} disabled={!allValid} onClick={goToHomePageHandler}>ثبت نام</button>

                    <p className="text-go-to-login">حساب کاربری دارید؟ <Link to={'/Login'} className='link-go-to-login'>وارد شوید</Link></p>
                </form>

                <div className="container-img-sign-in">
                    <img src="Imgs/img-form-1.jpg" className="img-sign-in" />
                </div>

            </div>
        </div>
    )
}
