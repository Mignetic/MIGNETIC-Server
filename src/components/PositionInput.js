import Header from '../components/Header'
import { useNavigate, useLocation } from 'react-router-dom'
import '../css/PositionInput.css'
import bgImg from '../images/testPosition-bg.png'
import btn from '../images/select-btn.png'

function PositionInput() {
    document.body.style.backgroundImage = `url(${bgImg})`
    const navigate = useNavigate()
    const location = useLocation()

    const position1 = location.state?.position1 || 'school'
    const type1 = ['school', 'outsider'].includes(position1) ? position1 : 'school'

    const position2 = location.state?.position2 || 'student'
    const type2 = ['student', 'teacher'].includes(position2) ? position2 : 'student'

    const inputPlaceholder = (type2) => {
        if (type2 === 'student') return '학년'
        else if (type2 === 'teacher') return '과목'
    }

    let types
    if (type1 === 'school') types = type2 === 'student' ? 'student' : 'teacher'
    else if (type1 === 'outsider') types = 'outsider'

    const handleSubmit = () => {
        navigate('/test', { state: {types} })
    }
    
    return (
        <div>
            <Header where={'basic'} />
            <div className='PositionInput'>
                {
                    type1 === 'school' ? (
                        <div className="schoolInputContainer">
                            <input className='inputText' type="text" placeholder='이름' id='studentName' autoComplete="off" />
                            <input className='inputText' type="text" placeholder={inputPlaceholder(type2)} id='studentSubject' autoComplete="off" />
                        </div>
                    ) : type1 === 'outsider' ? (
                        <div className="outsiderInputContainer">
                            <input className='inputText' type="text" placeholder="이름" id='studentName' autoComplete="off" />

                            <div className='radioContainer'>
                                <div>
                                    <label className='radioLabel' htmlFor="contactChoice1">부모님</label>
                                    <input type="radio" id="contactChoice1" name="contact" value="parent" />
                                </div>
                                <div>
                                    <label className='radioLabel' htmlFor="contactChoice2">지인</label>
                                    <input type="radio" id="contactChoice2" name="contact" value="friend" />
                                </div>
                                <div>
                                    <label className='radioLabel' htmlFor="contactChoice3">회사 관계자</label>
                                    <input type="radio" id="contactChoice3" name="contact" value="company" />
                                </div>
                            </div>
                        </div>
                    ) : null
                }
                <div className='privacyContainer'>
                    개인정보동의
                    <input className='inputCheck' type="checkbox" />
                </div>
                <button className='testSubmitBtn' onClick={handleSubmit}><img src={btn} /><p>검사하기</p></button>
            </div>
        </div>
    )
}

export default PositionInput