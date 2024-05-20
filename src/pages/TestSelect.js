import bgImg from '../images/testPosition-bg.png'
import '../css/common/Index.css'


import Header from '../components/Header'
import PositionSelect from '../components/PositionButton'

function TestSelect() {
    document.body.style.backgroundImage = `url(${bgImg})`
    return (
        <div className="TestSelect">
            <Header where={'basic'} />
            <PositionSelect />
        </div>
    )
}

export default TestSelect