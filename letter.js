// server.js (Express 서버 파일)

const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');
const cors = require('cors');
const path = require('path');

const app = express();
const port = 3000;

// MySQL 데이터베이스 연결 설정
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '111111',
    database: 'mignetic',
    port: 3307
});

connection.connect((err) => {
    if (err) {
        console.error('MySQL 데이터베이스 연결 실패:', err);
        return;
    }
    console.log('MySQL 데이터베이스 연결 성공');
});

// 미들웨어 설정
app.use(bodyParser.json());
app.use(cors());

// '/api/saveLetter' 엔드포인트: 편지 내용을 데이터베이스에 저장
app.post('/api/saveLetter', (req, res) => {
    const { letterContent } = req.body;

    const sql = `INSERT INTO letter (content) VALUES (?)`;

    connection.query(sql, [letterContent], (err, result) => {
        if (err) {
            console.error('데이터베이스에 데이터를 저장하는 중 오류 발생:', err);
            return res.status(500).json({ error: '데이터베이스에 데이터를 저장하는 중 오류 발생' });
        }

        console.log('데이터베이스에 데이터 저장 완료:', result);
        return res.status(200).json({ message: '편지 저장 성공' });
    });
});

// 정적 파일 제공: build 폴더 안의 파일 제공 (React 앱)
app.use(express.static(path.join(__dirname, 'build')));

// 모든 다른 경로에 대한 처리: React 앱의 index.html 제공
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

// 서버 시작
app.listen(port, () => {
    console.log(`서버가 http://localhost:${port} 에서 실행 중입니다.`);
});
