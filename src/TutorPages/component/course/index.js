import React from 'react'
import avt1 from '../../../assets/images/avt1.jpg'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import '../course/navcourse.css'

export default function Courses({ course }) {
    const lastName = useSelector(state => state.user.currentUser.lastName)
    const firstName = useSelector(state => state.user.currentUser.firstName)
    const {
        id,
        name,
        price,
        description,
        imageUrl,
    } = course
    return (
        <div className="box__student">
            <div className="student__thumb">
                <img src={imageUrl} alt="" className="student__img2" />
            </div>
            <div className="student__tutor">
                <img src={avt1} alt="" className="student__img1" />
                <div className="student__info">
                    <h3 className="student__h32">{firstName} {lastName}</h3>
                </div>
            </div>
            <h3 className="student__title">{name}</h3>
            {price ? <h3>{price} $</h3> : null}
            <p className='student__des'>{description}</p>
            <div className='course__buttonlink'>
                <Link className="inline-btn" to={`/viewcourses/${id}`}><i class='bx bxs-chevrons-right'></i>Learn More</Link>
            </div>
        </div>
    )
}
