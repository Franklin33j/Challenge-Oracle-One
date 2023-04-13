

let encriptar=()=>{
  
   let info= document.getElementById('data')
   let title=document.getElementById('content-title')
   let description=document.getElementById('content-description')
   let cadEncriptada=''
    //CADENA CON MAYUSCULAS

   if(!validacionesComunes(info,title, description ))
   {
       for (let index = 0; index < info.value.length; index++) {
      
        switch (info.value[index]) {
            case 'e':
                cadEncriptada=cadEncriptada+'enter';
                break;
            case 'i':
                cadEncriptada=cadEncriptada+'imes';
                break;
            case 'a':
                cadEncriptada=cadEncriptada+'ai';
                break;
            case 'o':
                cadEncriptada=cadEncriptada+'ober';
                break;
            case 'u':
                    cadEncriptada=cadEncriptada+'ufat';
                    break;
            default:
               cadEncriptada=cadEncriptada+info.value[index];
        }
       }
      
       title.innerText="La cadena ha sido encriptada con exito"
       description.innerHTML=`<strong>${info.value}</strong> <br> ${cadEncriptada}`
       info.value=''
    }
    
}
let desencriptar=()=>{

    let info= document.getElementById('data')
    let title=document.getElementById('content-title')
    let description=document.getElementById('content-description')
    let cadDesencriptada=''
     //CADENA CON MAYUSCULAS
 
    if(!validacionesComunes(info,title, description ))
    {
        cadDesencriptada = info.value
        .replace(/enter/g, 'e')
        .replace(/imes/g, 'i')
        .replace(/ai/g, 'a')
        .replace(/ober/g, 'o')
        .replace(/ufat/g, 'u');
        title.innerText="La cadena ha sido desencriptada con exito"
        description.innerHTML=`<strong>${info.value}</strong> <br> ${cadDesencriptada}`
        info.value=''
   }
     
     }
    
function validacionesComunes(info, title, description){
    let valid=false;
    const regex1 = /[A-Z]/;
    const regex2= /[ÁÉÍÓÚÜÑ!?\-_@#$%&*(){}\[\]]/i;

     //CADENA VACIA
     if(info.value ==''){
      
        title.innerText="no se ha ingresado ningun valor"
        description.innerText="por favor ingrese un valor "
        valid=true
    }
    //MAYUSCULAS
    else if (regex1.test(info.value)){
        title.innerText="Eror en la informacion ingresada!"
        description.innerText="La cadena no debe poseer caracteres en mayuscula "
        valid=true
    }
    //CARACTERES ESPECIALES
    else if (regex2.test(info.value)){
        title.innerText="Eror en la informacion ingresada!"
        description.innerText="La cadena no debe poseer caracteres especiales "
        valid=true
    }
    return valid
}