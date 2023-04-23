import React from 'react'
import s from './header.module.scss'
import Image from 'next/image'
import Link from 'next/link'
//custom components
import Search from '@/components/Search'

const Header = () => {
    return (
        <>
            <header className={s.header}>
                    <Link href="/" className={s.header__logo}>
                        <h1>eShop</h1>
                    </Link>
                    <Search />
            </header>
        </>
    )
}

export default Header