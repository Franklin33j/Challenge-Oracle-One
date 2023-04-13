

let encriptar=()=>{
  
   let info= document.getElementById('data')
   let title=document.getElementById('content-title')
   let description=document.getElementById('content-description')
   let cadEncriptada=''
   let btnCopy=document.getElementById('btn-copy')
    //CADENA CON MAYUSCULAS

   if(!validacionesComunes(info,title, description, btnCopy ))
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
       btnCopy.style.display='block'
    }
    
}
let desencriptar=()=>{

    let info= document.getElementById('data')
    let title=document.getElementById('content-title')
    let description=document.getElementById('content-description')
    let btnCopy=document.getElementById('btn-copy')
    let cadDesencriptada=''
     //CADENA CON MAYUSCULAS
 
    if(!validacionesComunes(info,title, description, btnCopy ))
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
        btnCopy.style.display='block'
   }
     
     }
    
function validacionesComunes(info, title, description, btnCopy){
    let valid=false;
    const regex1 = /[A-Z]/;
    const regex2= /[ÁÉÍÓÚÜÑ!?\-_@#$%&*(){}\[\]]/i;

     //CADENA VACIA
     if(info.value ==''){
      
        title.innerText="no se ha ingresado ningun valor"
        description.innerText="por favor ingrese un valor "
        btnCopy.style.display='none'
        valid=true
    }
    //MAYUSCULAS
    else if (regex1.test(info.value)){
        title.innerText="Eror en la informacion ingresada!"
        description.innerText="La cadena no debe poseer caracteres en mayuscula "
        btnCopy.style.display='none'
        info.value =' '
        valid=true
    }
    //CARACTERES ESPECIALES
    else if (regex2.test(info.value)){
        title.innerText="Eror en la informacion ingresada!"
        description.innerText="La cadena no debe poseer caracteres especiales "
        btnCopy.style.display='none'
        info.value =' '
        valid=true
    }
    return valid
}
let copyText=()=>{
    let description=document.getElementById('content-description')
    navigator.clipboard.writeText(description.textContent)
  .then(() => {
  })
  .catch(err => {
    console.error('Error al copiar al portapapeles:', err)
  })
}