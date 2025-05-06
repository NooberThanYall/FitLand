import './Footer.css'
import './mediaFooter.css'
import { FaYoutube } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";
import { BiLogoTelegram } from "react-icons/bi";
import { RiInstagramFill } from "react-icons/ri";
import { HiOutlineMail } from "react-icons/hi";

export default function Footer() {
    return (
        <div className='container'>
            <div className="container-footer">

                <div className="container-footer-top">

                    <div className="container-footer-top-right">
                        <div className="container-content-footer-top-right">
                            <p className="titles-content-footer-top-right">محبوب‌ترین‌ها</p>
                            <p className="des-content-footer-top-right hover">لباس مردانه</p>
                            <p className="des-content-footer-top-right hover">لباس زنانه</p>
                            <p className="des-content-footer-top-right hover">دوچرخه</p>
                            <p className="des-content-footer-top-right hover">کفش فوتبال</p>
                        </div>

                        <div className="container-content-footer-top-right">
                            <p className="titles-content-footer-top-right">خدمات مشتریان</p>
                            <p className="des-content-footer-top-right hover">سوالات متداول</p>
                            <p className="des-content-footer-top-right hover">حریم خصوصی</p>
                            <p className="des-content-footer-top-right hover">گزارش ایراد در سایت</p>
                            <p className="des-content-footer-top-right hover">شرایط بازگرداندن محصول</p>
                        </div>

                        <div className="container-content-footer-top-right">
                            <p className="titles-content-footer-top-right">اطلاعات تماس</p>
                            <p className="des-content-footer-top-right">نشانی  تهران - تجریش - خیابان سالور</p>
                            <p className="des-content-footer-top-right">شماره تماس <abbr style={{ color: '#FA541C' }}>0213456789</abbr></p>
                            <p className="des-content-footer-top-right">پست الکترونیک  <abbr style={{ color: '#FA541C' }}>info@fitland.com</abbr></p>
                            <p className="des-content-footer-top-right">ساعت کاری  شنبه تا چهارشنبه 9 تا 17</p>
                        </div>
                    </div>

                    <div className="container-top-left">
                        <p className="title-top-left">برای دریافت تخفیف های بیشتر ما را دنبال کنید!</p>
                        <div className="container-icons-top-left">
                            <FaYoutube size={30} className='icons-footer youtube' />
                            <IoLogoWhatsapp size={30} className='icons-footer whatsapp' />
                            <BiLogoTelegram size={30} className='icons-footer tel' />
                            <RiInstagramFill size={30} className='icons-footer insta' />
                        </div>
                        <p className="title-input-top-left">خبرنامه فیت‌لند</p>
                        <HiOutlineMail className='icon-input-footer' />
                        <input type="text" placeholder='ایمیل خود را وارد کنید...' className='input-footer' />
                        <button className="btn-submit-top-left">ثبت</button>
                    </div>

                </div>

                <div className="container-footer-bottom">
                    <p className="title-footer-bottom">فروشگاه اینترنتی فیت‌لند</p>
                    <p className="desc-footer-bottom">فروشگاه لوازم ورزشی فیت‌لند در سال 1403 کار خود را به صورت حرفه ای آغاز کرد و با هدف ارائه جدیدترین محصولات ورزشی از قبیل لوازم فوتبال، فوتسال، والیبال، بسکتبال، تنیس و... همچنین پوشاک ورزشی و تجهیزات سفر، از برند های معتبر دنیا در محیطی کاربرپسند، قابل اطمینان و با مجربترین مشاوران و کارشناسان ورزشی فعالیت می کند. فروشگاه فیت‌لند دارای نماد اعتماد از وزارت صنعت معدن و تجارت می باشد و تمامی محصولات خود را با 7 روز ضمانت بازگشت همراه با گارانتی اصالت و سلامت فیزیکی، با سریع ترین روش های ارسال به سراسر ایران در اختیار مشتریان خود قرار می دهد.</p>
                </div>
                <div className="botto-bottom-footer">
                    <p className="text-right-bottom-footer">تمامی حقوق مادی و معنوی این وب‌سایت برای مجموعه فیت‌لند محفوظ می‌باشد.</p>
                    <p className="text-left-bottom-footer">توسعه یافته توسط <abbr style={{ color: '#FA541C' }}>شایان جعفرنژاد</abbr> و <abbr style={{ color: '#FA541C' }}>پرهام محبی</abbr></p>
                </div>
            </div>       
        </div>
    )
}

