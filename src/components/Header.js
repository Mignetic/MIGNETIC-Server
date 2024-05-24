import React from 'react'
import '../css/common/Header.css'

import { Link } from 'react-router-dom'

import Logo from '../images/icons/logo.png'

function Header({ position }) {
    const type = ['home', 'basic'].includes(position) ? position : 'basic'

    return (
        <div className="Header">
            {
                type === 'home' ? (
                    <div className="homeHeaderContainer">
                        <nav>
                            <ul>
                                <li><Link to='/testselect'>검사하기</Link></li>
                                <li><Link to='/'>MIGNETIC</Link></li>
                                <li><Link to='/Hotplace'>핫플보기</Link></li>
                            </ul>
                        </nav>
                    </div>
                ) : (
                    <div className="headerContainer">
                        <nav>
                            <ul>
                                <li><Link to='/'><img src={Logo} alt="로고" /></Link></li>
                                <div className='liContainer'>
                                    <li className='liNav1'><Link to='/testselect'>검사하기</Link></li>
                                    <li className='liNav2'><Link to=''>핫플보기</Link></li>
                                </div>
                            </ul>
                        </nav>
                    </div>
                )
            }
        </div>
    )
}

export default Header