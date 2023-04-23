import React from 'react'
import s from './search.module.scss'
import Image from 'next/image'
import scaleglass from '../../assets/header/scaleglass.svg'

const index = () => {
    return (
        <>
            <div className={s.search}>
                <div className={s.search__img}>
                    <Image src={scaleglass} width={16} height={16}  />
                </div>
                <input type="text" placeholder="Пошук" className={s.search__input}/>
                <button className={s.search__btn}>Пошук</button>
            </div>
        </>
    )
}

export default index