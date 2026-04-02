const mysql = require('mysql2');
require('dotenv').config();

// 데이터베이스와 대화할 통로(Pool) 만들기
const pool = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  port: process.env.DB_PORT || 3306,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});

// 연결 확인 테스트
pool.getConnection((err, connection) => {
  if (err) {
    console.error('❌ [에러] MySQL 연결 실패! 비번이나 DB명을 확인하세요:', err.message);
  } else {
    console.log('✅ [시스템] MySQL 데이터베이스 연결 성공! (창고 문 열림)');
    connection.release();
  }
});

module.exports = pool.promise();