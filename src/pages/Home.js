// import bgImg from '../images/home-bg.png'
import '../css/Home.css'

import Header from '../components/Header'
// import Logo from '../components/Logo'

function Home() {
    document.body.style.backgroundColor = '#8044FF'
    // document.body.style.backgroundImage = `url(${bgImg})`
    return (
        <div className="Home">
            <Header where={'home'} />
            {/* <Logo /> */}
        </div>
    )
}

export default Home