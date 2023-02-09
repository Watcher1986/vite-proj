import React from 'react';
import logoImg from '../../assets/img/Logo.svg';
import './Sidebar.scss';

export default function Sidebar() {
    return (
        <>
            <aside className='sidebar'>
                <div className='logoWrapper'>
                    <img src={logoImg} alt="logo" />
                </div>
                <div className='navLinks'>
                    <p>Finances: </p>
                    <a href="#">First item</a>
                    <a href="#">Second item</a>
                    <a href="#">Third item</a>
                    <a href="#">Fours item</a>
                </div>
                <div className='navLinks'>
                    <p>Integration: </p>
                    <a href="#">First item</a>
                    <a href="#">Second item</a>
                    <a href="#">Third item</a>
                    <a href="#">Fours item</a>
                </div>
                <div className='navLinks'>
                    <p>Support: </p>
                    <a href="#">First item</a>
                    <a href="#">Second item</a>
                    <a href="#">Third item</a>
                    <a href="#">Fours item</a>
                </div>
                <div className='navLinks'>
                    <p>Promo Tools: </p>
                    <a href="#">First item</a>
                    <a href="#">Second item</a>
                    <a href="#">Third item</a>
                    <a href="#">Fours item</a>
                </div>
            </aside>
        </>
    )
}
