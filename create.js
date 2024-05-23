document.getElementById('signup-form').addEventListener('submit', function(event) {
    event.preventDefault(); // 기본 제출 동작 막기

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirm-password').value;

    // 비밀번호와 비밀번호 확인이 일치하는지 확인
    if (password !== confirmPassword) {
        alert('비밀번호가 일치하지 않습니다.');
        return;
    }

    // 여기서 추가적인 회원가입 로직을 추가할 수 있습니다.
    // 예를 들어, 서버로 데이터를 전송하는 AJAX 요청 등.

    // 회원가입이 성공하면 로그인 페이지로 이동
    window.location.href = 'index.html';
});
