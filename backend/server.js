const express = require('express');
const cors = require('cors');
const app = express();

// 서버 설정: 외부 도메인(React 등)에서의 접속을 허용하고 JSON 데이터 처리를 활성화합니다.
app.use(cors());
app.use(express.json());

// 기본 경로(Root) 접속 시 서버 상태 확인을 위한 응답을 전송합니다.
app.get('/', (req, res) => {
  res.send('Star_Spot 백엔드 서버가 정상적으로 구동 중입니다.');
});

// 서버 포트 설정 및 대기 상태 시작
const PORT = 5000;
app.listen(PORT, () => {
  console.log(`[안내] 서버가 ${PORT}번 포트에서 안정적으로 실행되었습니다.`);
});