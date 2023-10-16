function tocaSom(idElementoAudio){
document.querySelector(idElementoAudio).play();
}
const listaDeTeclas=document.querySelectorAll('.tecla');
 
 let contador=0;
 //Estrtura de repetição - Enquanto 
 while(contador < listaDeTeclas.length) {
    const tecla=
    const instrumento = listaDeTeclas[contador].classList[1];
    console.log(instrumento);
     listaDeTeclas[contador].onclick=function(){
        tocaSom('#som_tecla_splash');
     };
   contador = contador + 1;
   console.log(contador);
    }




























