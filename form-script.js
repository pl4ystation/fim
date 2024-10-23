
document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Previne o envio padrão do formulário

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Verifica se o e-mail contém um '@'
    if (!email.includes('@')) {
        alert('Por favor, insira um e-mail válido que contenha "@"');
        return; // Para o envio do formulário
    }

    // Se a validação passar, você pode prosseguir para o login
    // Aqui você pode adicionar sua lógica de login
    alert('Login bem-sucedido!'); // Substitua isso pela lógica de redirecionamento
    window.location.href = 'dashboard.html'; // Altere para o seu arquivo de dashboard
});
