const express = require('express');
const bodyParser = require('body-parser');
const connection = require('./db'); // 위에서 작성한 MySQL 연결 설정 파일
const cors = require('cors');
const axios = require('axios');
const path = require('path');

const app = express();
const port = 3000;

app.use(bodyParser.json());

// POST 요청 처리 예시
app.post('/api/saveAnswers', (req, res) => {
    const { types, studentName, studentSubject, outsiderType, selectedAnswers } = req.body;

    // MySQL 쿼리 작성
    const sql = `INSERT INTO student_data (name, stuID, answer1, answer2, answer3, answer4, answer5, answer6, answer7, answer8, answer9, answer10, type) 
                 VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`;

    // 질문에 따른 답변 데이터 추출
    const answers = selectedAnswers.map((answerIndex) => answerIndex.toString());

    // 쿼리 실행
    connection.query(sql, [studentName, studentSubject, ...answers, types], (err, result) => {
        if (err) {
            console.error('쿼리 실행 오류:', err);
            res.status(500).json({ error: '서버 오류 발생' });
        } else {
            console.log('데이터 저장 성공!');
            res.status(200).json({ message: '데이터 저장 성공' });
        }
    });
});

app.use(express.static(path.join(__dirname, 'build')));

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
});


// 서버 시작
app.listen(port, () => {
    console.log(`서버가 http://localhost:${port} 포트에서 실행 중입니다.`);
});