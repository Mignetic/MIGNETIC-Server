const express = require('express');
const connection = require('./db2'); // MySQL 연결 설정 파일
const router = express.Router();

// ID가 3인 값 불러오기
router.get('/student/3', (req, res) => {
    const sql = 'SELECT * FROM student_data WHERE id = 3';
    connection.query(sql, (err, results) => {
        if (err) {
            console.error('쿼리 실행 오류:', err);
            res.status(500).json({ error: '서버 오류 발생' });
        } else {
            res.status(200).json(results);
        }
    });
});

module.exports = router;
