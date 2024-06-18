// server.js
const express = require('express');
const path = require('path');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = 3000;


// 미들웨어 등록
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// 리액트 앱에서 정적 파일 사용
app.use(express.static(path.join(__dirname, 'build')));

// API 라우트
app.use('/api/result', require('./result'));
app.use('/api/info', require('./info')); // info.js 라우터 등록
app.use('/api/letter', require('./letter'));
app.use('/api/letter-board', require('./letter-board'));

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
