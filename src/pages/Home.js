import bgImg from '../images/home-bg.png'
import '../css/common/Index.css'
import '../css/Home.css'

import Header from '../components/Header'
import logo from '../images/icons/home-logo.png'

function Home() {
    // document.body.style.backgroundColor = '#8044FF'
    document.body.style.backgroundImage = `url(${bgImg})`
    return (
        <div>
            <Header position={'home'} />
            <div className="Home">
                <img src={logo} className='homeLogo' />
            </div>
        </div>
    )
}

export default Home