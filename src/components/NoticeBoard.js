import Logo from '../images/icons/logo.png'
import letterImg from '../images/icons/letterImg.png'

import '../css/NoticeBoard.css'


function NoticeBoard() {

    return (
        <div class="noticeBoard-background">
            <div class="logo-container"><img src={Logo} class=".boardLogo"/></div>
            <div class="boardLetter">
                <div className='boardLetterImg'>
                    <div className='letterFront'><img src={letterImg}/></div>
                    <div className='letterBack'><p className='leftP'>To.승주</p><p className='rightP'>from.승주</p></div>
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