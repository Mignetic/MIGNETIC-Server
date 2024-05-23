import logo from '../images/icons/footer-logo.png'
import gihubIcon from '../images/icons/footer-github.png'

import '../css/common/Footer.css'

function Footer({ position }) {
    const type = ['test', 'result'].includes(position) ? position : 'test'

    return (
        <div className="Footer">
            {
                type === 'test' && (
                    <div className='footerLogoContainer'>
                        <img src={logo} />
                    </div>
                )
            }
            <div className='footerTest'>
                <div className={`footerTestFont ${type === 'test' ? 'testContainer' : 'resultContainer'}`}>
                    MIRIM MEISTER HIGH SHCOOL<br />
                    <br />
                    TEAM [ PEPPER ]<br />
                    DESIGN | 방윤서 유희주<br />
                    FRONT | 김수연 양지아 유희주<br />
                    BACK | 권지수 노승주 방윤서<br />
                </div>
                <div className='footerTestImg'>
                    <img src={gihubIcon} />
                </div>
            </div>
        </div>
    )
}

export default Footer