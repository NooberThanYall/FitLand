import './LoginForm.css'
import './mediaLoginForm.css'
import { useNavigate, Link } from 'react-router';
import { useState, useEffect } from 'react';

export default function LoginForm() {

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
    <div className='container'>

      <p className='text-back-home-login' onClick={goToHomePageHandler}>خانه</p>

      <div className="form-login">

        <form className="container-inputs-login">
          <h3 className="title-form">ورود</h3>

          <input type="text" className={`inputs-login ${isNameValid ? 'valid' : 'inValid'}`} placeholder="نام و نام خانوادگی" onChange={event => setInputName(event.target.value)} />

          <input type="number" className={`inputs-login ${isPhoneValid ? 'valid' : 'inValid'}`} placeholder="شماره موبایل" onChange={event => setInputPhone(event.target.value)} />

          <button className={`btn-login ${allValid ? '' : 'btn-dont-work'}`} disabled={!allValid} onClick={goToHomePageHandler}>ورود</button>

          <p className="text-go-to-login">حساب کاربری ندارید؟ <Link to={'/SignIn'} className='link-go-to-sign-in'>ثبت نام کنید</Link></p>
        </form>

        <div className="container-img-login">
          <img src="Imgs/img-form-1.jpg" className="img-login" />
        </div>

      </div>
    </div>
  )
}
