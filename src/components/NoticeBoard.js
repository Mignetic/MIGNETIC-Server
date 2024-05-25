import Logo from '../images/icons/logo.png'
import letterImg from '../images/icons/letterImg.png'

import '../css/NoticeBoard.css'

import { useNavigate } from 'react-router-dom'


function NoticeBoard() {

    const navigate = useNavigate();

    const ShowLetter = () =>{

        navigate('/showletter')

    }

    return (
        <div class="noticeBoardBackground">
            <div class="logoContainer"><img src={Logo} class=".boardLogo"/></div>
            <div class="boardLetter">
                <div className='boardLetterImg'>
                    <div className='letterFront'><img src={letterImg}/></div>
                    <div className='letterBack' onClick={ShowLetter}><p className='leftP'>To.승주</p><p className='rightP'>from.승주</p></div>
                </div>
                <div className='boardLetterImg'>
                    <div className='letterFront'><img src={letterImg}/></div>
                    <div className='letterBack'>To.윤서</div>
                </div>
                <div className='boardLetterImg'>
                    <div className='letterFront'><img src={letterImg}/></div>
                    <div className='letterBack'></div>
                </div>
                <div className='boardLetterImg'>
                    <div className='letterFront'><img src={letterImg}/></div>
                    <div className='letterBack'></div>
                </div>
                <div className='boardLetterImg'>
                    <div className='letterFront'><img src={letterImg}/></div>
                    <div className='letterBack'></div>
                </div>
                <div className='boardLetterImg'>
                    <div className='letterFront'><img src={letterImg}/></div>
                    <div className='letterBack'></div>
                </div>
                <div className='boardLetterImg'>
                    <div className='letterFront'><img src={letterImg}/></div>
                    <div className='letterBack'></div>
                </div>
                <div className='boardLetterImg'>
                    <div className='letterFront'><img src={letterImg}/></div>
                    <div className='letterBack'></div>
                </div>
                <div className='boardLetterImg'>
                    <div className='letterFront'><img src={letterImg}/></div>
                    <div className='letterBack'></div>
                </div>




            </div>
            
        </div>        
    )
   
}

export default NoticeBoard