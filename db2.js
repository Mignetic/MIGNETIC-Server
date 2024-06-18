const mysql = require('mysql2');

// MySQL 연결 설정
const connection = mysql.createConnection({
    host: 'localhost', // MySQL 호스트 주소
    user: 'root',      // MySQL 사용자 이름
    password: '0000',  // MySQL 비밀번호
    database: 'mignetic' // 사용할 데이터베이스 이름
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