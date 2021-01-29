var nomeUser = document.getElementById("nome").value;
var cpfUser = document.getElementById("cpf").value;
var telefoneUser = document.getElementById("telefone").value;
var emailUser = document.getElementById("email").value;
const result = document.querySelector("#result ol")

// var nomeUser = document.querySelector(".nome").value;
// var cpfUser = document.querySelector(".cpf").value;
// var telefoneUser = document.querySelector(".telefone".value);
// var emailUser = document.querySelector(".email").value;


function EnviarForm() {

    let usuarios = new Array();

    if (localStorage.hasOwnProperty("usuarios")) {
        usuarios = JSON.parse(localStorage.getItem("usuarios"))
    }
    //    var user = JSON.stringify({
    //        nome: nomeUser,
    //        cpf: cpfUser,
    //        telefone: telefoneUser,
    //        email: emailUser
    //    });

    usuarios.push({
        nome: nomeUser,
        cpf: cpfUser,
        telefone: telefoneUser,
        email: emailUser
    });

    localStorage.setItem("usuarios", JSON.stringify(usuarios))

    // usuarios.push(user)
    localStorage.setItem('user', usuarios);
    // console.log('user cadastrado:',user);


    result.insertAdjacentHTML('beforeend', `<li>${nome.value}</li>`)

}
window.addEventListener("load", _ => {
    if (localStorage.hasOwnProperty("usuarios")) {
        JSON.parse(localStorage.getItem("usuarios")).forEach(element => {
            result.insertAdjacentHTML('beforeend', `<li>${element.name}</li>`)
        });
    }
})

document.querySelector('form').onsubmit = (e) => {
    e.preventDefault();
    EnviarForm();

}

