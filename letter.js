const express = require('express');
const cors = require('cors');
const router = express.Router();
const connection = require('./db');

// CORS 설정
router.use(cors());

// POST 요청 처리
router.post('/letter', (req, res) => {
    const { toName, letterContent } = req.body;

    // 단계 1: student_data 테이블에서 최근 항목의 name 필드 가져오기
    const getLastStudentNameQuery = 'SELECT name FROM student_data ORDER BY id DESC LIMIT 1';
    connection.query(getLastStudentNameQuery, (err, results) => {
        if (err) {
            console.error('쿼리 실행 오류:', err);
            res.status(500).json({ error: '서버 오류 발생' });
            return;
        }

        if (results.length === 0) {
            res.status(404).json({ error: '학생 데이터를 찾을 수 없습니다' });
            return;
        }

        const fromName = results[0].name;

        // 단계 2: letter 테이블에 데이터 삽입
        const insertLetterQuery = 'INSERT INTO letter (toName, fromName, content) VALUES (?, ?, ?)';
        connection.query(insertLetterQuery, [toName, fromName, letterContent], (err, results) => {
            if (err) {
                console.error('편지 데이터 삽입 오류:', err);
                res.status(500).json({ error: '편지 데이터 삽입 중 오류 발생' });
            } else {
                console.log('편지 데이터 삽입 성공:', results);
                res.status(200).json({ message: '편지 전송 및 데이터베이스 저장 완료!' });
            }
        });
    });
});

module.exports = router;
