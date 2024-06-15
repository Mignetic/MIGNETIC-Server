const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');
const path = require('path');
const app = express();
const port = 3000;
const connection = require('./db'); // MySQL 연결 설정 파일
const router = express.Router();


// MySQL 데이터베이스 연결 설정
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root', // MySQL 사용자 이름
    password: '1234', // MySQL 비밀번호
    database: 'mignetic' // 사용할 데이터베이스 이름
});

// MySQL 연결
db.connect((err) => {
    if (err) {
        throw err;
    }
    console.log('MySQL database connected');
});

// Body parser 설정
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// POST 요청 처리
app.post('/api/saveAnswers', (req, res) => {
    const postData = req.body;

    let sqlQuery;
    let values;

    if (postData.types === 'student') {
        
        sqlQuery = 'INSERT INTO student_data (name, stuID, answer1, answer2, answer3, answer4, answer5, answer6, answer7, answer8, answer9, answer10, type, best, best_name, best_stuID, worst) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)';
        values = [
            postData.name,
            postData.stuID,
            postData.selectedAnswers[0],
            postData.selectedAnswers[1],
            postData.selectedAnswers[2],
            postData.selectedAnswers[3],
            postData.selectedAnswers[4],
            postData.selectedAnswers[5],
            postData.selectedAnswers[6],
            postData.selectedAnswers[7],
            postData.selectedAnswers[8],
            postData.selectedAnswers[9],
            postData.types,
            postData.best,
            postData.best_name,
            postData.best_stuID,
            postData.worst
        ];
    } else if (postData.types === 'teacher') {
        sqlQuery = 'INSERT INTO teacher_data (name, subject, answer1, answer2, answer3, answer4, answer5, answer6, answer7, answer8, answer9, answer10, type, best, best_name, best_subject, worst) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)';
        values = [
            postData.name,
            postData.subject,
            postData.selectedAnswers[0],
            postData.selectedAnswers[1],
            postData.selectedAnswers[2],
            postData.selectedAnswers[3],
            postData.selectedAnswers[4],
            postData.selectedAnswers[5],
            postData.selectedAnswers[6],
            postData.selectedAnswers[7],
            postData.selectedAnswers[8],
            postData.selectedAnswers[9],
            postData.types,
            postData.best,
            postData.best_name,
            postData.best_subject,
            postData.worst
        ];
    } else if (postData.types === 'official') {
        sqlQuery = 'INSERT INTO official_data (name, relation, answer1, answer2, answer3, answer4, answer5, answer6, answer7, answer8, answer9, answer10, type, best, best_name, best_relation, worst) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)';
        values = [
            postData.name,
            postData.relation,
            postData.selectedAnswers[0],
            postData.selectedAnswers[1],
            postData.selectedAnswers[2],
            postData.selectedAnswers[3],
            postData.selectedAnswers[4],
            postData.selectedAnswers[5],
            postData.selectedAnswers[6],
            postData.selectedAnswers[7],
            postData.selectedAnswers[8],
            postData.selectedAnswers[9],
            postData.types,
            postData.best,
            postData.best_name,
            postData.best_relation,
            postData.worst
        ];
    } else {
        res.status(400).send('Invalid types');
        return;
    }

    // 데이터 삽입 쿼리 실행
    db.query(sqlQuery, values, (err, result) => {
        if (err) {
            console.error('데이터 삽입 오류:', err);
            res.status(500).send('데이터 삽입 오류가 발생했습니다.');
        } else {
            console.log('데이터가 성공적으로 삽입되었습니다.');
            res.status(200).json({ message: '데이터가 성공적으로 삽입되었습니다.', id: result.insertId });
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
