import './Comments.css'
import './mediaComments.css'

export default function Comments() {
  return (
    <div className="comments-provider">
        <div className="container-name-and-img-user">
            <img src="Imgs/img-user.png" className='img-user' />
            <p className="name-user">شایان</p>
        </div>
        <p className="text-comment">محصولات خیلی خوبی دارید</p>
    </div>
  )
}
