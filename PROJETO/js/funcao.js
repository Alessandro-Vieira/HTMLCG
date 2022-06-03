function msg(){
    alert("Sr(a) " + document.faleconosco.nome.value + ", seus dados foram enviados com sucesso.");
}

function aumento(){
    document.faleconosco.nome.value = document.faleconosco.nome.value.toUpperCase();
}

function acesso(){
    if (document.restrito.cpf.value=="024" && document.restrito.senha.value=="123"){
        alert("Seja bem vindo ao Sistema Administrativo");
    }
    else{
        alert("Sr(a) verifique as suas credenciais, caso seja o primeiro acesso, clicar sobre o botão Cadastrar");
    }
    document.restrito.cpf.value="";
    document.restrito.senha.value="";
}