import bgImg from '../images/letter-bg.png'

import Header from '../components/Header'
import Footer from '../components/Footer'
import Letter from '../components/Letter'

function LetterWrite(){
    document.body.style.backgroundImage = `url(${bgImg})`
    return (
        <div>
            <Header where={'basic'}/>
            <Letter/>
            {/* <Footer/> */}
        </div>
    )
}

export default LetterWrite