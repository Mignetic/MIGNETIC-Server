import bgImg from '../images/result-bg.png'
import logoimg from '../images/icons/logo.png'
import stars from '../images/stars.png'


function Result (){
    document.body.style.backgroundImage = `url(${bgImg})`

    return(
        <div className='result'>
            <img src={logoimg} className="logoimg" />
            <div className='result-container'>
                <div className='type-container'>
                    <p className='your-type-first'>당신의 타입은...</p>
                    <div className='type-name-stars'>
                        <img src={stars} className="stars stars-first"/>
                        <p className='type-name'>Setter</p>
                        <img src={stars} className="stars stars-end"/>
                    </div>
                    <p className='your-type-end'>입니다</p>
                </div>
                <div className='type-description'>
                    <div className='type-li-container'>
                        <li className='type-li'>여기는 타입의 설명을 쭉 쓰기 <br></br>
                        여기는 타입의 설명을 쭉 쓰기 여기는 타입의 설명을 쭉 쓰기 <br></br>
                        여기는 타입의 설명을 쭉 쓰기 여기는 타입의 설명을 쭉 쓰기 <br></br>
                        여기는 타입의 설명을 쭉 쓰기 여기는 타입의 설명을 쭉 쓰기  <br></br>
                        여기는 타입의 설명을 쭉 쓰기 
                        </li>
                        <li className='type-li'>여기는 타입의 설명을 쭉 쓰기 <br></br>
                        여기는 타입의 설명을 쭉 쓰기 여기는 타입의 설명을 쭉 쓰기 <br></br>
                        여기는 타입의 설명을 쭉 쓰기 여기는 타입의 설명을 쭉 쓰기 <br></br>
                        여기는 타입의 설명을 쭉 쓰기 여기는 타입의 설명을 쭉 쓰기  <br></br>
                        여기는 타입의 설명을 쭉 쓰기 
                        </li>
                    </div>
                    <div className='finding-friend'></div>
                </div>
            </div>
        </div>
    )
}

export default Result;