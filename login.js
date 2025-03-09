document.addEventListener('DOMContentLoaded', (event) => {
    const loginForm = document.getElementById('loginForm');
    loginForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;
        const csrfToken = document.querySelector('input[name="csrf_token"]').value;

        // Simple validation
        if (username === '' || password === '') {
            alert('Please fill in both fields');
            return;
        }

        // Example of a login request
        fetch('/api/v1/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'CSRF-Token': csrfToken
            },
            body: JSON.stringify({ username, password })
        })
        .then(response => response.json())
        .then(data => {
            if (data.success) {
                window.location.href = '/dashboard';
            } else {
                alert('Invalid credentials');
            }
        })
        .catch(error => {
            console.error('Error:', error);
        });
    });
});
