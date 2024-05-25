import bgImg from '../../images/last-bg.png'
import heart from '../../images/icons/last-heart.png'
import btnBg from '../../images/last-btn.png'

import { useNavigate } from 'react-router-dom'

function Last() {
    const navigate = useNavigate()

    const handleTest = () => {
        navigate('/testselect')
    }

    const handleHotplace = () => {
        navigate('/hotplace')
    }

    return (
        <div className="Last" style={{ backgroundImage: `url(${bgImg})` }}>
            <div className='lastBtnContainer'>
                <div className='btnContainer'>
                    <img className='heartIcon' src={heart} />
                    <button className='lastBtn' onClick={handleTest}><img src={btnBg} /><p>검사하기</p></button>
                </div>
                <div className='btnContainer'>
                    <img className='heartIcon' src={heart} />
                    <button className='lastBtn' onClick={handleHotplace}><img src={btnBg} /><p>핫플보기</p></button>
                </div>
            </div>
        </div>
    )
}

export default Last