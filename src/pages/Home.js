import '../css/common/Index.css'
import '../css/Home.css'

import Header from '../components/Header'
import Main from '../components/homes/Main'
import Footer from '../components/Footer'

function Home() {
    return (
        <div>
            <Header position={'home'} />
            <Main />
            <Footer position='home'/>
        </div>
    )
}

export default Home