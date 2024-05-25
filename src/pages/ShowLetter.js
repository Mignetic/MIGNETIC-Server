import LetterContents from "../components/LetterContents"

import bgImg from '../images/noticeBoard-bg2.png'

function ShowLetter(){

    document.body.style.backgroundImage = `url(${bgImg})`

    return(
        <LetterContents />
    )
}

export default ShowLetter