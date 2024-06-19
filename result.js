const express = require('express');
const session = require('express-session');
const connection = require('./db'); // MySQL 연결 설정 파일
const router = express.Router();

// 유사도를 계산하는 함수
function calculateSimilarity(studentAnswers, typeAnswers) {
    let similarity = 0;
    for (let i = 0; i < studentAnswers.length; i++) {
        if (studentAnswers[i] === typeAnswers[i]) { 
            similarity++;   // type 테이블과 응답과 사용자의 응답이 같다면 1 증가
        }
    }
    return similarity;
}

// POST 요청 처리
router.post('/', (req, res) => {
    // 클라이언트에서 전송한 데이터
    const { id, type } = req.body;  // front에서 session에 저장된 id와 type을 불러옴
    let division = -1; // 학생 : 0, 선생님 : 1, 외부인 : 2
    const divisionArr = ['student_data', 'teacher_data', 'official_data'];
    let bestType = null;
    let worstType = null;
    let topFourFriends = null;

    if(type === 'student') division = 0
    else if(type === 'teacher') division = 1
    else if(type === 'official') division = 2

    const studentSql = `SELECT * FROM ${divisionArr[division]} WHERE id = ${id}`; // 사용자의 student_data값을 불러옴
    connection.query(studentSql, (err, studentResults) => {
        if (err) {
            console.error('쿼리 실행 오류:', err);
            res.status(500).json({ error: '서버 오류 발생' });
        } else {
            const studentData = studentResults[0];
            // 응답을 저장
            const studentAnswers = [
                studentData.answer1, studentData.answer2, studentData.answer3, studentData.answer4,
                studentData.answer5, studentData.answer6, studentData.answer7, studentData.answer8,
                studentData.answer9, studentData.answer10
            ];

            const typeSql = `SELECT * FROM type WHERE division = ${division}`;
            connection.query(typeSql, (err, typeResults) => {
                if (err) {
                    console.error('쿼리 실행 오류:', err);
                    res.status(500).json({ error: '서버 오류 발생' });
                } else {
                    let bestMatch = null;
                    let highestSimilarity = -1;

                    // type 테이블에서 각 타입을 한 번씩 가져옴
                    typeResults.forEach(typeRow => {
                        const typeAnswers = [
                            typeRow.answer1, typeRow.answer2, typeRow.answer3, typeRow.answer4,
                            typeRow.answer5, typeRow.answer6, typeRow.answer7, typeRow.answer8,
                            typeRow.answer9, typeRow.answer10
                        ];

                        // 유사도 비교
                        const similarity = calculateSimilarity(studentAnswers, typeAnswers);

                        // 유사도가 가장 높은 값을 저장함
                        if (similarity > highestSimilarity) {
                            highestSimilarity = similarity;
                            bestMatch = typeRow.type; // type 속성 값 저장
                            bestType = typeRow.best; // 가장 잘 맞는 사람 저장
                            worstType = typeRow.worst; // 가장 안 맞는 사람 저장
                        }
                    });

                    // ID가 있는 행의 값을 업데이트
                    const updateSql = `UPDATE ${divisionArr[division]} SET type = ?, best = ?, worst = ? WHERE id = ?`;
                    connection.query(updateSql, [bestMatch, bestType, worstType, id], (err, updateResult) => {
                        if (err) {
                            console.error('쿼리 실행 오류:', err);
                            res.status(500).json({ error: '데이터베이스 업데이트 오류 발생' });
                        }
                    });
                    
                    const fourFriendSql = `SELECT * FROM ${divisionArr[division]} WHERE type = '${bestType}'`;
                    connection.query(fourFriendSql, (err, fourFriendResult) => {
                        if(err) {
                            console.error('쿼리 실행 오류:', err);
                            res.status(500).json({ error: '데이터베이스 업데이트 오류 발생' });    
                        }
                        let similarity = -1;
                        let friendsSimilarity = fourFriendResult.map(friend => {
                            const friendAnswer = [
                                friend.answer1, friend.answer2, friend.answer3, friend.answer4, friend.answer5,
                                friend.answer6, friend.answer7, friend.answer8, friend.answer9, friend.answer10
                            ];
                            similarity = calculateSimilarity(studentAnswers, friendAnswer);
                            return {...friend, similarity};
                        });
                        friendsSimilarity.sort((a,b) => b.similarity - a.similarity);
                        topFourFriends = friendsSimilarity.slice(0,4).map(friend => ({
                            id : friend.id,
                            name : friend.name,
                            similarity : friend.similarity
                        }));
                    });
                    const explainSql = `SELECT intro, hashtag, strength, weakness FROM type WHERE division = ${division} and type = '${bestMatch}'`;
                    const bestExplainSql = `SELECT intro, hashtag FROM type WHERE division = ${division} and type = '${bestType}'`
                    const worstExplainSql = `SELECT intro, hashtag FROM type WHERE division = ${division} and type = '${worstType}'`
                    connection.query(explainSql, (err, explainSqlResult) => {
                        if(err) {
                            console.error('쿼리 실행 오류:', err);
                            res.status(500).json({ error: '데이터베이스 업데이트 오류 발생' });
                        }
                        connection.query(bestExplainSql, (err, bestExplainResult) => {
                            if(err) {
                                console.log('쿼리 실행 오류 : ', err);
                                res.status(500).json({error:'데이터베이스 업테이트 오류 발생'})
                            }
                            connection.query(worstExplainSql, (err, worstExplainResult) => {
                                if(err) {
                                    console.log('쿼리 실행 오류 : ', err);
                                    res.status(500).json({error:'데이터베이스 업테이트 오류 발생'})
                                }
                                // 프론트로 전송, 화면에 출력할 수 있는 데이터
                                res.status(200).json({
                                    studentData: studentData,
                                    bestMatch: bestMatch, // 가장 유사한 type 값 반환
                                    bestType : bestType,
                                    worstType : worstType,
                                    topFourFriends : topFourFriends,
                                    explainResult : explainSqlResult,
                                    bestExplainResult : bestExplainResult,
                                    worstExplainResult : worstExplainResult
                                });
                            })
                        })

                    });
                }
            });
        }
    });
});

module.exports = router;
