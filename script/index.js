var nomeUser = document.getElementById("nome");
var cpfUser = document.getElementById("cpf");
var telefoneUser = document.getElementById("telefone");
var emailUser = document.getElementById("email");
var ulrFoto = document.getElementById("url");

let usuarios = new Array();

function EnviarForm() {
    usuarios.push({
        nome: nomeUser.value,
        cpf: cpfUser.value,
        telefone: telefoneUser.value,
        email: emailUser.value,
        url: ulrFoto.value
    });

    localStorage.setItem("usuarios", JSON.stringify(usuarios))
}

document.querySelector('form').onsubmit = (e) => {
    e.preventDefault();
    EnviarForm();

}


