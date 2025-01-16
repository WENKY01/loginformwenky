function validateForm(event) {
    event.preventDefault();
    
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const errorMessage = document.getElementById('errorMessage');
    
    // Contoh validasi sederhana
    // Dalam kasus nyata, Anda akan memvalidasi dengan database atau API
    if (username === 'wenky' && password === '12345') {
        alert('Login berhasil!');
        // Di sini Anda bisa menambahkan kode untuk redirect ke halaman dashboard
        errorMessage.style.display = 'none';
    } else {
        errorMessage.style.display = 'block';
    }
}