
import logo from '../../images/icons/home-logo.png'
// import bgImg from '../../images/home-bg.png'
import bgImg from '../../images/testPosition-bg.png'
import Header from '../Header'

function Main() {
    return (
        <div className='Main' style={{ backgroundImage: `url(${bgImg})` }}>
            <Header position={'home'} />
            <div className="MainLogo">
                <img src={logo} className='homeLogo' />
            </div>
        </div>
    )
}

export default Main