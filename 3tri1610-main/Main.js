function tocaSom(idElementoAudio){
   document.querySelector(idElementoAudio).play();
   }
   const listaDeTeclas=document.querySelectorAll('.tecla');
    
    let contador=0;
    //Estrtura de repetição - Enquanto 
    while(contador < listaDeTeclas.length) {
      const tecla = listaDeTeclas[contador];
      const instrumento = tecla.classList[1];
     const idAudio = '#som_ ${instrumento}';
      console.log(instrumento);
      console.log(idAudio);

      tecla.onclick=function () {
           tocaSom(idAudio);
         };
         tecla.onkeydown=function(){
            tecla.classlist.add ('ativa');
         }
         tecla.onkeyup=function(){
            tecla.classlist.remove('ative');
         }
      console.log(contador);
       }























