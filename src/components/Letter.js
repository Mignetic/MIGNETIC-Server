import { useNavigate } from 'react-router-dom'


import Header from '../components/Header'



import envelope from '../images/envelope.png'
import letterPaper from '../images/letterPaper.png'



import '../css/Letter.css'

function Letter(){

    const navigate = useNavigate()

    const handleTransmission = () =>{

        const letterText = document.querySelector('.letterInputText').value
        console.log(letterText)
        navigate('/noticeboard')

    }

    return (
        <div className='Letter-background'>


            <div className='letterPaper'>
                    <div className='name'>To. 여긴이름받아오기</div>
                    <textarea className='letterInputText' placeholder="여기에 편지를 써요"></textarea>
                    <button className='letterbtn' onClick={handleTransmission}>전송하기</button>
            </div>
            <div className='envelope'><img src={envelope}></img></div>
            
        </div>
    )


}

export default Letter