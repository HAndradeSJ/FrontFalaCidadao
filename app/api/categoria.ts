import api from "@/shared/componentes/utils/my-axios";
import { Categoria } from "@/shared/types/types";
import axios from "axios";

export const getCategoria = async ()  => {
  try{
     const response =  await api.get('/categoria/getall')
          const array = response.data.response;
          return array

   
  }catch(err){
    console.log(err);
  }
}

