import Logo from '../images/icons/logo.png'
import bgImg2 from '../images/noticeBoard-bg2.png'

import '../css/NoticeBoard.css'


function NoticeBoard() {

    return (
        <div class="noticeBoard-background">
            <div class="logo-container"><img src={Logo} class=".boardLogo"/></div>
            <div class="boardBg"></div>
            
        </div>        
    )
   
}

export default NoticeBoard