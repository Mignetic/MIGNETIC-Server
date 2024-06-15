const mysql = require('mysql');

const connection = mysql.createConnection({
    host: 'localhost', // MySQL 호스트 주소
    user: 'root',      // MySQL 사용자 이름
    password: '1234',  // MySQL 비밀번호
    database: 'mignetic', // 사용할 데이터베이스 이름
    port : 3307
});

// 연결 테스트
connection.connect((err) => {
    if (err) {
        console.error('MySQL 연결 실패:', err);
    } else {
        console.log('MySQL 연결 성공!');
    }
});

module.exports = connection;