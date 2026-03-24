const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors()); // 프론트엔드 리액트랑 대화할 수 있게 허락해주는 기능
app.use(express.json()); // JSON이라는 데이터를 주고받게 해주는 기능

// 인터넷 주소창에 내 서버 주소를 치면 나올 메시지
app.get('/', (req, res) => {
  res.send('백엔드 대장님 출근 완료! 서버가 잘 돌아갑니다 🚀');
});

// 서버가 몇 번 방(포트)에서 기다릴지 정하기
app.listen(5000, () => {
  console.log('서버가 5000번 포트에서 기다리고 있어요!');
});