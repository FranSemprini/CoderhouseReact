import { useState } from 'react'
import { Link } from 'react-router-dom'
import './Categories.scss'
import ArrowCircleDownIcon from '@mui/icons-material/ArrowCircleDown';

export const Categories = () => {

    const [categories, setCategories] = useState(false)

    const toggle = () => {
        setCategories(!categories)
        console.log(categories)
    }

    return (
        <div className={categories ? "categories__container show__categories" : "categories__container"}>
            <div className='categories'>
                <Link to='../categories/cats' className='categories__link'>Cats</Link>
                <Link to='../categories/dogs' className='categories__link'>Dogs</Link>
                <Link to='../categories/fish' className='categories__link'>Fish</Link>
            </div>
            <div onClick={toggle} className='showMore__container'>
                <h3 className="showMore__text">Categories</h3>
                <ArrowCircleDownIcon className= {categories ? "showMore__arrow--open showMore__arrow--closed" : "showMore__arrow--open"} />
            </div>
        </div>
    )

}