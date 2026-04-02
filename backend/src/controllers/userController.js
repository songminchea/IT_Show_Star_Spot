exports.testUser = (req, res) => {
    res.status(200).json({
        success: true,
        message: "컨트롤러 연결에 성공했습니다. 이제 비즈니스 로직을 구현할 수 있습니다!"
    });
};