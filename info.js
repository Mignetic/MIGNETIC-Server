const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');
const cors = require('cors');
const path = require('path');
const router = express.Router(); // 변경된 부분
// const connection = require('./db'); // MySQL 연결 설정 파일

// MySQL 데이터베이스 연결 설정
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root', // MySQL 사용자 이름
    password: '0000', // MySQL 비밀번호
    database: 'mignetic', // 사용할 데이터베이스 이름
    port: 3306
});

// MySQL 연결
db.connect((err) => {
    // if (err) {
    //     throw err;
    // }
    console.log('MySQL database connected');
});

// Body parser 설정
router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: true }));

router.get('/saveAnswers', (req, res) => {res.send("dsdfsdf")});
router.use(cors());
// POST 요청 처리
router.post('/saveAnswers', (req, res) => {
    const postData = req.body;

    let sqlQuery;
    let values;

    if (postData.types === 'student') {
        sqlQuery = 'INSERT INTO student_data (name, stuID, answer1, answer2, answer3, answer4, answer5, answer6, answer7, answer8, answer9, answer10, type, best, worst) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)';
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
            postData.worst
        ];
    } else if (postData.types === 'teacher') {
        sqlQuery = 'INSERT INTO teacher_data (name, subject, answer1, answer2, answer3, answer4, answer5, answer6, answer7, answer8, answer9, answer10, type, best, worst) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)';
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
            postData.worst
        ];
    } else if (postData.types === 'official') {
        sqlQuery = 'INSERT INTO official_data (name, relation, answer1, answer2, answer3, answer4, answer5, answer6, answer7, answer8, answer9, answer10, type, best, worst) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)';
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

// 정적 파일 제공
router.use(express.static(path.join(__dirname, 'build')));

router.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

module.exports = router;
