function tocaSom(idElementoAudio){
 const elememto= document.querySelector(idElementoAudio);
 if(elememto === null){
  alert ('elemento não encontrado');
 }
 if(elememto && elememto.localName === 'audio') {
  elememto.play();
 }else {
  alert('Elemento não encotrado');
  }
}
  const listaDeTeclas = document.querySelectorAll('.tecla');

   for( let contador = 0; contador<listaDeTeclas.length; contador++){
     const tecla = listaDeTeclas[contador];
     const instrumento = tecla.classList[1];
    const idAudio = `#som_ ${instrumento}`;
     console.log(idAudio);

     tecla.onclick = function(){
          tocaSom(idAudio);
        };
      tecla.onkeydown = function(evento){
        if (evento.code === 'Enter'||evento.code === 'Space'){
          tecla.classList.add('ativa');
        } 
      };
    tecla.onkeyup = function(){
      tecla.classList.remove('ativa');
    };
    console.log(instrumento);
    console.log(contador);
        }

























