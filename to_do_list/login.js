document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const message = document.getElementById('message');
    
    // Simple validation
    if (username === 'hyeokjun' && password === 'juni0317') {
        message.style.color = 'green';
        message.textContent = 'Login successful! Redirecting...';
        
        // Redirect to index.html after 1 seconds
        setTimeout(() => {
            window.location.href = 'list.html';
        }, 1000);
    } else {
        message.style.color = 'red';
        message.textContent = 'Invalid username or password.';
    }
});
