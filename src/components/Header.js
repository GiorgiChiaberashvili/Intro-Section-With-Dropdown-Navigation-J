import snap from '../images/logo.svg'
import todo from '../images/icon-todo.svg'
import calendar from '../images/icon-calendar.svg'
import reminders from '../images/icon-reminders.svg'
import planning from '../images/icon-planning.svg'
import up from '../images/icon-arrow-up.svg'
import down from '../images/icon-arrow-down.svg'
import burger from '../images/icon-menu.svg'
import close from '../images/icon-close-menu.svg'
import { useEffect, useState } from 'react'
import '../css/index.css'
import '../css/queries.css'



function Header() {
    const [showCloseBtn, setShowCloseBtn] = useState(false);
    const [isMenuOpen, setMenuOpen] = useState(true);
    const [isMenuOpen2, setMenuOpen2] = useState(true);

    const handleCloseBtn = () => {
        setShowCloseBtn(!showCloseBtn)
    }

    const handleShowMenu = () => {
        setMenuOpen(!isMenuOpen);
        console.log(isMenuOpen);
    }

    const handleSecondMenuShow = () => {
        setMenuOpen2(!isMenuOpen2)
    }

    const handleMouseEnter = () => {
        setMenuOpen(true)
    }
    const handleMouseLeave = () => {
        setMenuOpen(false)
    }



    return (
        <header>
            <img src={snap} alt='logo' className='snap' />
            <nav className='navigation'>
                <ul>
                    <li>
                        <div class="dropdown">
                            <button class="dropdown-button" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>Features <img src={isMenuOpen ? up : down} alt="Arrow" className="arrow-icon-1" /> </button>
                            <div class="dropdown-menu">
                                <li>
                                    <img src={todo} alt="todo" className="menu-icon" />
                                    <a href="#">Todo List</a>
                                </li>
                                <li>
                                    <img src={calendar} alt="calendar" className="menu-icon" />
                                    <a href="#">Calendar</a>
                                </li>
                                <li>
                                    <img src={reminders} alt="reminders" className="menu-icon" />
                                    <a href="#">Reminders</a>
                                </li>
                                <li>
                                    <img src={planning} alt="notepad" className="menu-icon" />
                                    <a href="#">Planning </a>

                                </li>
                            </div>
                        </div>

                    </li>
                    <li>
                        <div class="dropdown">
                            <button class="dropdown-button" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>Company <img src={isMenuOpen ? up : down} alt="Arrow" className="arrow-icon-1" id='dropdown-button' /> </button>
                            <div className='dropdown-menu-2 '>
                                <li>
                                    <a href="#">History</a>
                                </li>
                                <li>
                                    <a href="#">Our Team</a>
                                </li>
                                <li>
                                    <a href="#">Blog</a>
                                </li>
                            </div>
                        </div>

                    </li>
                    <li>
                        <button class="dropdown-button">Careers <a href='/'></a></button>
                    </li>
                    <li>
                        <button class="dropdown-button">About <a href='/'></a></button>

                    </li>
                </ul>


            </nav>
            {showCloseBtn &&

                <nav className='navigation_mobile' >
                    {/* <div class='mobile_wrapper'> */}
                    <ul>

                        <li>
                            <div class="dropdown">
                                <button class="dropdown-button">Features <img src={isMenuOpen ? down : up} alt="Arrow" className="arrow-icon-2" onClick={handleShowMenu} /> </button>
                                <div className={`dropdown-menu-mobile ${isMenuOpen ? 'hidden' : ''}`} >
                                    <li>
                                        <img src={todo} alt="todo" className="menu-icon" />
                                        <a href="#">Todo List</a>
                                    </li>
                                    <li>
                                        <img src={calendar} alt="calendar" className="menu-icon" />
                                        <a href="#">Calendar</a>
                                    </li>
                                    <li>
                                        <img src={reminders} alt="reminders" className="menu-icon" />
                                        <a href="#">Reminders</a>
                                    </li>
                                    <li>
                                        <img src={planning} alt="notepad" className="menu-icon" />
                                        <a href="#">Planning </a>

                                    </li>
                                </div>
                            </div>

                        </li>


                        <li>
                            <div class="dropdown">
                                <button class="dropdown-button">Company <img src={isMenuOpen2 ? down : up} alt="Arrow" className="arrow-icon-2" onClick={handleSecondMenuShow} /> </button>
                                <div className={`dropdown-menu-mobile ${isMenuOpen2 ? 'hidden' : ''}`} >
                                    <li>
                                        <a href="#">History</a>
                                    </li>
                                    <li>
                                        <a href="#">Our Team</a>
                                    </li>
                                    <li>
                                        <a href="#">Blog</a>
                                    </li>
                                </div>
                            </div>

                        </li>
                        <li>
                            <button class="dropdown-button">Careers <a href='/'></a></button>
                        </li>
                        <li>
                            <button class="dropdown-button">About <a href='/'></a></button>
                        </li>
                        <li>
                            <div className='login_mobile'>
                                <a href='/#'>Login </a>
                                <a href='/#'>Register </a>
                            </div>
                        </li>
                    </ul>
                    {/* </div> */}
                    {/* <img src={close} onClick={handleCloseBtn} className='close' /> */}

                </nav>}

            <div className='login'>
                <a href='/#'>Login </a>
                <a href='/#'>Register </a>
            </div>
            {!showCloseBtn && <img src={burger} alt='burger' className='burger' onClick={handleCloseBtn} />}
            {showCloseBtn && <img src={close} alt='close' className='close' onClick={handleCloseBtn} />}
        </header >
    )
};

export default Header;