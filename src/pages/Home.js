import '../css/common/Index.css'
import '../css/Home.css'

import Main from '../components/homes/Main'
import Secondary from '../components/homes/Secondary'
import Last from '../components/homes/Last'
import Footer from '../components/Footer'

function Home() {
    return (
        <div>
            <Main />
            <Secondary/>
            <Last />
            <Footer position='home' />
        </div>
    )
}

export default Home