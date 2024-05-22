import ask from '../images/test-askbtn.png';
import arrowBtn from '../images/icons/test-arrowBtn.png';
import '../css/Question.css';

const questions = [
    {
        question: "내 스타일에 가까운 선생님은?",
        answers: ["당근 주는 지훈쌤", "채찍 주는 규정쌤", "공주님 시켜주는 재민쌤"]
    },
    {
        question: "명찰을 안했는데 저기 멀리서 지우쌤이 나를 부른다",
        answers: ["못 들은 척하고 도망간다", "당당하게 선생님 앞으로 간다"]
    },
    {
        question: "프로젝트를 만들기 시작했다!",
        answers: ["강의나 책으로 먼저 공부하기", "구글링 하면서 바로 시작하기"]
    },
    {
        question: "내가 되고 싶은건",
        answers: ["T호소인 정훈쌤", "F호소인 명수쌤"]
    },
    {
        question: "병석쌤이 나에게 질문을 하셨다",
        answers: ["열심히 대답한다", "눈을 피한다", "뜸을 들인다"]
    },
    {
        question: "학교에 좀비가 나타났다",
        answers: ["병석쌤처럼 좀비 진정시키기", "낙은쌤의 라인댄스 기술로 물리치기", "향규쌤의 네발걷기 기술로 도망가기"]
    },
    {
        question: "남친룩의 정석은?",
        answers: ["영철쌤", "윤환쌤", "재민쌤"]
    },
    {
        question: "졸고있었는데 재민쌤이 어디 다녀왔냐고 물어본다",
        answers: ["꿈나라에 다녀왔다고 한다", "아무것도 안했다고 발뺌한다"]
    },
    {
        question: "방과후 수업이 시작됐다",
        answers: ["힘들지만 도움되는 수업", "몰컴할 수 있는 널널한 수업"]
    },
    {
        question: "코드를 짜다가 모르는 것이 생겼다",
        answers: ["chat gpt 활용", "구글링한다", "끝까지 내 힘으로 풀어본다"]
    }
];

function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

function Question() {
    const shuffledQuestions = shuffle([...questions]);

    return (
        <div>
            {shuffledQuestions.map((item, index) => (
                <div className="Question" key={index}>
                    <div className='askContainer'>
                        <img src={ask} alt="Ask Button" />
                        <p>{item.question}</p>
                    </div>

                    <div className={`questionContainer ${item.answers.length === 2 ? 'two-answers' : 'three-answers'}`}>
                        {item.answers.map((answer, answerIndex) => (
                            <button key={answerIndex}>{answer}</button>
                        ))}
                    </div>

                    <hr />
                </div>
            ))}
            <div className='nextContainer'>
                <button className='nextBtn'>다음<img src={arrowBtn} alt="Arrow Button" /></button>
            </div>
        </div>
    );
}

export default Question