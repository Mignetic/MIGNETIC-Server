// letter-server.js

const express = require('express');
const cors = require('cors');
const router = express.Router();
const connection = require('./db2');

router.use(cors());

// Fetch user data based on type and id
router.get('/:type/:id', (req, res) => {
    const { type, id } = req.params;
    let tableName;

    switch (type) {
        case 'student':
            tableName = 'student_data';
            break;
        case 'teacher':
            tableName = 'teacher_data';
            break;
        case 'official':
            tableName = 'official_data';
            break;
        default:
            return res.status(400).json({ error: 'Invalid user type' });
    }

    const query = `SELECT name FROM ${tableName} WHERE id = ?`;
    connection.query(query, [id], (err, results) => {
        if (err) {
            console.error('Error fetching user data:', err);
            return res.status(500).json({ error: 'Error fetching user data' });
        }

        if (results.length === 0) {
            return res.status(404).json({ error: 'User not found' });
        }

        res.json(results[0]);
    });
});

// Save letter
router.post('/saveLetter', (req, res) => {
    const { toName, fromName, letterContent } = req.body;

    const insertLetterQuery = 'INSERT INTO letter (toName, fromName, content) VALUES (?, ?, ?)';
    connection.query(insertLetterQuery, [toName, fromName, letterContent], (err, results) => {
        if (err) {
            console.error('Error inserting letter data:', err);
            res.status(500).json({ error: 'An error occurred while saving the letter.' });
        } else {
            console.log('Letter data successfully inserted:', results);
            res.status(200).json({ message: 'Letter sent and saved successfully!', letter: { toName, fromName, letterContent } });
        }
    });
});

router.get('/lastLetter', (req, res) => {
    // letter 테이블에서 최근에 추가된 편지 조회 쿼리
    const selectLastLetterQuery = 'SELECT * FROM letter ORDER BY id DESC LIMIT 1';
    connection.query(selectLastLetterQuery, (err, results) => {
        if (err) {
            console.error('편지 데이터 조회 오류:', err);
            res.status(500).json({ error: '편지 데이터 조회 중 오류 발생' });
        } else {
            // 조회된 마지막 편지를 클라이언트로 응답
            if (results.length > 0) {
                res.status(200).json(results[0]);
            } else {
                res.status(404).json({ error: '편지를 찾을 수 없습니다' });
            }
        }
    });
});

module.exports = router;
