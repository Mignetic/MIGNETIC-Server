import NoticeBoard from '../components/NoticeBoard'
import bgImg from '../images/noticeBoard-bg2.png'

function Board(){

    document.body.style.backgroundImage = `url(${bgImg})`
    return(
        <NoticeBoard/>
    )

}

export default Board