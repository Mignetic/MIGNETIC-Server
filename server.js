const express = require('express');
const mysql = require('mysql');
const cors = require('cors');
const app = express();
const port = 8888;

app.use(cors());

// const db = mysql.createConnection({
//     host: 'localhost',
//     user: '[유저이름]',
//     password: '[비밀번호]',
//     database: '[데이터베이스 이름]'
// });

// db.connect((err) => {
//     if (err) {
//         console.error('에러 :', err);
//         return;
//     }
//     console.log('MySQL에 연결');
// });

// app.get('/api/[테이블 이름]', (req, res) => {
//     const sql = 'SELECT * FROM [테이블 이름]';
//     db.query(sql, (err, results) => {
//         if (err) {
//             console.error('에러 :', err);
//             res.status(500).json({ error: 'Database query error' });
//             return;
//         }
//         res.json(results);
//     });
// });

app.get("/", (req, res) => {
    res.send("hi");
});

app.listen(port, () => {
    console.log(`포트 -> ${port}`);
});