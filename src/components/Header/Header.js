import React from 'react'
import HeaderLogo from '../HeaderLogo/HeaderLogo'
import './Header.css'

export default function Header() {
    return (
        <header className="Header">
            <div className="container">
                <div className="Header__container">
                    <HeaderLogo />
                </div>
            </div>
        </header>
    )
}
