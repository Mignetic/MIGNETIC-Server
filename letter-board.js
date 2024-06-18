const express = require('express');
const router = express.Router();
const connection = require('./db2'); // MySQL 연결 설정이 필요합니다.

router.get('/latest', (req, res) => {
    const selectLatestLetterQuery = 'SELECT toName, fromName, content FROM letter ORDER BY id DESC LIMIT 1';
    connection.query(selectLatestLetterQuery, (err, results) => {
        if (err) {
            console.error('최신 편지 조회 오류:', err);
            res.status(500).json({ error: '최신 편지 조회 중 오류 발생' });
        } else {
            if (results.length > 0) {
                res.status(200).json(results[0]); // 가장 최신 결과를 전송합니다.
            } else {
                res.status(404).json({ error: '편지가 없습니다.' });
            }
        }
    });
});

module.exports = router;
