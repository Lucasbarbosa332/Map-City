function toggleDenunciaForm() {
    var form = document.getElementById('denunciaForm');
    if (form.style.display === "none") {
        form.style.display = "block";  // Exibe o formulário de denúncia
    } else {
        form.style.display = "none";   // Oculta o formulário de denúncia
    }
}


 // Captura o envio do formulário
 document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Impede o comportamento padrão do formulário

    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;

    // Salva os dados no localStorage
    localStorage.setItem('username', username);
    localStorage.setItem('email', email);

    // Redireciona para teste.html
    window.location.href = '/Denuncia_Componets/teste.html';
});





// Captura o envio do formulário
document.getElementById('loginForm').addEventListener('submit', function (event) {
    event.preventDefault(); // Impede o comportamento padrão do formulário

    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;

    // Salva os dados no localStorage
    localStorage.setItem('username', username);
    localStorage.setItem('email', email);

    // Mostra o loading
    document.getElementById('loading').style.display = 'flex';

    // Redireciona para a nova página após 5 segundos
    setTimeout(() => {
        window.location.href = '/Denuncia_Componets/teste.html';
    }, 10000); // 5 segundos de loading
});



/**************************** */

function submitForm(event) {
    event.preventDefault(); // Impede o envio padrão do formulário

    // Lógica para enviar o formulário para a API
    const form = document.getElementById('denunciaForm');
    
    // Criar um objeto FormData para enviar os dados do formulário
    const formData = new FormData(form);
    
    // Enviar os dados do formulário para a API usando fetch
    fetch('https://api.staticforms.xyz/submit', {
        method: 'POST',
        body: formData
    })
    .then(response => {
        if (response.ok) {
            // Se a resposta for ok, redirecionar para a página de agradecimento
            window.location.href = "obrigado.html"; // Redireciona para a página de agradecimento
        } else {
            // Caso haja um erro, mostrar uma mensagem de erro
            alert('Erro ao enviar a denúncia. Tente novamente mais tarde.');
        }
    })
    .catch(error => {
        // Caso haja um erro no fetch, mostrar uma mensagem de erro
        alert('Erro ao enviar a denúncia. Tente novamente mais tarde.');
    });
}
