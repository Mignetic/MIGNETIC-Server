import bgImg from '../images/result-bg.png'

function Result (){
    document.body.style.backgroundImage = `url(${bgImg})`

    return(
        <div className='result'>

        </div>
    )
}

export default Result;