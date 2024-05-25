import { useNavigate } from 'react-router-dom'

import '../css/LetterContents.css'

import Logo from '../images/icons/logo.png'

function LetterContents(){
    const navigate = useNavigate()

    const backBoardLetters = () => {
        navigate('/Board')
    }


    return(
        <div className="contentBackground">
            <div class="logoContainer"><img src={Logo} class=".boardLogo"/></div>
            <div className="letterContentsPaper">
                <div className="letterTo"><p>To. 받는 사람 이름</p></div>
                <div className="letterContents">여기는 편지의 내용을 보여주세요</div>
                <div className="letterFrom">From. 보낸 사람 이름</div>
            </div>
            <button className="backBoard" onClick={backBoardLetters}><p>이전 화면</p></button>
        </div>
    )
}

export default LetterContents