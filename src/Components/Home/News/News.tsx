import './News.css'
import './mediaNews.css'
import { FaArrowLeft } from "react-icons/fa";

export default function News() {
    return (
        <div className='container'>
            <div className="container-news">
                <p className="title-news">جدیدترین ها در اخبار ورزش</p>

                <div className="container-cards-news">
                    <img src="Imgs/img-news-1.png" className="img-card-news" />
                    <p className="title-card-news">افزایش دریافتی فوتبالیست ها و معافیت از سربازی</p>
                    <p className="desc-card-news">خبرها حاکی از آن است که رییس فدراسیون فوتبال اعلام کرد در فصل جاری قرار داد هر بازیکن فوتبال 50 درصد افزایش پیدا میکند همچنین وی گفت...</p>
                    <button className="btn-card-news">مشاهده خبر <FaArrowLeft /></button>
                </div>

                <div className="container-cards-news">
                    <img src="Imgs/img-news-2.png" className="img-card-news" />
                    <p className="title-card-news">شکست استرالیا در گام نخست جام جهانی فوتبال زنان!</p>
                    <p className="desc-card-news">تیم‌ها در روز اول مسابقات جام جهانی فوتبال زنان در شهر مادرید اسپانیا با یکدیگر به رقابت پرداختند.</p>
                    <button className="btn-card-news">مشاهده خبر <FaArrowLeft /></button>
                </div>
            </div>
        </div>
    )
}
