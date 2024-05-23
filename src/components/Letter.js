import Header from '../components/Header'
import envelope from '../images/envelope.png'
import letterPaper from '../images/letterPaper.png'
import '../css/Letter.css'

function Letter(){

    return (
        <div className='Letter-background'>


            <div className='letterPaper'>
                    <div className='name'>To. 여긴이름받아오기</div>
                    <textarea className='letterInputText' />
                    <button className='letterbtn'>전송하기</button>
            </div>
            <div className='envelope'><img src={envelope}></img></div>
            
        </div>
    )


}

export default Letter