import { useState } from 'react'
import { Link } from 'react-router-dom'
import './Categories.scss'

export const Categories = () => {

    const [categories, setCategories] = useState(false)

    const toggle = () => {
        setCategories(!categories)
        console.log(categories)
    }

    return (
        <div className={categories? "categories__container show__categories" : "categories__container"}>
            <div className='categories'>
                <Link to='../categories/cats' className='categories__link'>Cats</Link>
                <Link to='../categories/dogs' className='categories__link'>Dogs</Link>
            </div>
            <div className='showMore__container'>
            <h3 onClick={toggle} className="showMore__text">Categories</h3>
            </div>
        </div>
    )

}