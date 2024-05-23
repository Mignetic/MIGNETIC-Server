import React, { useEffect, useState } from "react";

import bgImg from '../images/hotplace-bg.png'

import Header from '../components/Header'
import Footer from '../components/Footer'
import Map from '../components/Map'

import '../css/Hotplace.css'
import '../css/common/Index.css'

function Hotplace(){
    document.body.style.backgroundImage = `url(${bgImg})`
    
   
    return(
        <div className="hot-place">
            <div className="header">
                <Header where={'basic'} />
            </div>
            <Map />
        <Footer />
    </div>
    )
}
export default Hotplace;