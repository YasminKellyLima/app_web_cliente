function entrar() {
    var email = document.getElementById("email").value;
    var senha = document.getElementById("password").value;

    if (email === "yasmin" && senha === "123456") {

        localStorage.setItem("user", email);

        window.location.replace("nav.html");
    } else {
        document.getElementById("msm").innerHTML = "Insira as credenciais corretamente.";
    }
}
