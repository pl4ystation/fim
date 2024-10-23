// security-settings.js

document.getElementById('change-password-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Impede o envio do formulário
    alert('Senha alterada com sucesso!'); // Mensagem de sucesso
    this.reset(); // Limpa o formulário
});

document.getElementById('toggle-2fa').addEventListener('click', function() {
    alert('Autenticação em duas etapas ativada!'); // Mensagem de ativação
});
