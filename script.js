function set() {
    let result = document.querySelector("#result");
    let dropdown = document.querySelector("#dropdown").value;
    let date = document.querySelector("#date").value;
    let estacao = document.querySelector("#estacao").value;

    if (dropdown == null || dropdown == "" && date == null || date == "" && estacao == null || estacao == "") {
        result.innerHTML = "Por favor, preencha todos os campos"
    } else {
        result.innerHTML = "Agendado!";
    }
}