//server 작성
const express = require('express');
const cors = require('cors')
const app = express();
const server = require('http').createServer(app);

//cors 사용
app.use(cors());

//API로 요청한 경우 hello 메세지를 보내는 콜백함수 사용
app.get('/api', (req,res) => {
    res.send({message: 'hello'});
});

//서버가 잘 동작하고 있는지 확인
server.listen(8888, () => {
    console.log("server is running on 8888");
});