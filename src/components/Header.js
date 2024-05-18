import React from 'react';
import '../css/Header.css'

function Header({ where }) {
    const type = ['home', 'basic'].includes(where) ? where : 'basic';

    return (
        <div className="Header">
            {
                type === 'home' ? (
                    <div className="homeHeaderContainer">
                        <nav>
                            <ul>
                                <li>검사하기</li>
                                <li>MIGNETIC</li>
                                <li>핫플보기</li>
                            </ul>
                        </nav>
                    </div>
                ) : type === 'basic'(
                    <div className="HeaderContainer">
                        <nav>
                            <ul>
                                <li>{ }</li>
                                <li>검사하기</li>
                                <li>핫플보기</li>
                            </ul>
                        </nav>
                    </div>
                )
            }
        </div>
    )
}

export default Header