document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("contact-form");

    form.addEventListener("submit", function (e) {
        e.preventDefault();
        const nome = document.getElementById("nome").value;
        const email = document.getElementById("email").value;
        const mensagem = document.getElementById("mensagem").value;

        // Aqui você pode adicionar lógica para enviar o formulário ou exibir uma mensagem de confirmação
        alert(`Nome: ${nome}\nEmail: ${email}\nMensagem: ${mensagem}`);
        form.reset();
    });
});
