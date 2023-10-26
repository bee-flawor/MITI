//função que toca o som POM----------------------
function tocaSom(idElementoAudio){ //foi alterado de TocaSomPom para apenas tocaSom
    //e asicionado o parâmetro idElementoAudio.
document.querySelector(idElementoAudio).play();
//Antes era document.querySelector('#som_tecla_pom').play();
}

//tecla POM
const listaDeTeclas = document.querySelectorAll('.tecla');


//função que toca da tecla para tocar o som.
let contador = 0;
while (contador <listaDeTeclas.length){ // o length foi trocado pelo numero 9 
         //que era o totral da lista.
const tecla = listaDeTeclas[contador];

const instrumento = tecla.classList[1];
//template string, para concatenar teto com variavel.
const idAudio = `#som_${instrumento}`; 

// console.log(idAudio);

tecla.onclick= function(){ 
//tocaSom('#som_tecla_pom');
tocaSom(idAudio);
}

tocaSom;// anterado de todaSomPom para tocaSom

contador = contador +1;
// console.log(contador);
}

