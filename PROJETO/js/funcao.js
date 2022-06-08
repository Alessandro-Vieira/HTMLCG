function mascara_tel(objeto){
    if(objeto.value.length == 0){
        objeto.value = objeto.value + '(';
    }
    if(objeto.value.length == 3){
        objeto.value = objeto.value + ')';
    }
    if(objeto.value.length == 9){
        objeto.value = objeto.value + '-';
    }
}

function msg(){
    alert("Sr(a) " + document.faleconosco.nome.value + ", seus dados foram enviados com sucesso.");
}