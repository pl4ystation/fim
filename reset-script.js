// Função para fazer o fade-out do formulário ao enviar
function fadeOutResetForm() {
    const resetContainer = document.querySelector('.reset-container');
    resetContainer.classList.add('fade-out');

    // Simula um redirecionamento ou qualquer outra ação após 1.5s (tempo do fade-out)
    setTimeout(function() {
        // Limpa o conteúdo do formulário e exibe a mensagem de sucesso
        resetContainer.innerHTML = `
            <h1>Link Enviado</h1>
            <p>Um link para redefinir sua senha foi enviado para seu e-mail!</p>
            <button onclick="goToLogin()">Voltar para o Login</button>
        `;
        resetContainer.classList.remove('fade-out'); // Remove a classe de fade-out para mostrar o novo conteúdo
        resetContainer.classList.add('fade-in'); // Adiciona fade-in ao novo conteúdo
    }, 1500);
}

// Função para redirecionar de volta para a tela de login
function goToLogin() {
    window.location.href = "proxima-pagina.html"; // Redireciona para a tela de login
}
