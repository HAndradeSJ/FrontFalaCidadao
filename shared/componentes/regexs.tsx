import React from 'react'
import Swal from 'sweetalert2';

export default function regexs(name: string, value:string){
  switch(name){
    case 'email':{
      var regexs = /\S+@\S+\.\S+/
      const validator = regexs.test(value)
      if(validator == true){
        return 
    }else{
      Swal.fire({
        icon: "error",
        title: "Email Inválido!",
      });
    }
    break
    }
    case 'cpf':{
      var regexs = /^([0-9]{3}\.?[0-9]{3}\.?[0-9]{3}\-?[0-9]{2}|[0-9]{2}\.?[0-9]{3}\.?[0-9]{3}\/?[0-9]{4}\-?[0-9]{2})$/
      const validator = regexs.test(value)
      if(validator == true){
        return 
    }else{
      Swal.fire({
        icon: "error",
        title: "Cpf Inválido!",
      });
    }
    break
    }
    case 'telefone':{
      var regexs = /^(?:(?:\+|00)?(55)\s?)?(?:\(?([1-9][0-9])\)?\s?)?(?:((?:9\d|[2-9])\d{3})\-?(\d{4}))$/
      const validator = regexs.test(value)
      if(validator == true){
        return 
    }else{
      Swal.fire({
        icon: "error",
        title: "telefone Inválido!",
      });
    }
    break
    }
  }
}


