import { Categoria } from "@/shared/types/types";
import axios from "axios";

export const getCategoria = async ()  => {
  try{
     const response =  await axios.get('http://10.10.0.217:3080/categoria/getall')
          const array = response.data.response;
          return array

   
  }catch(err){
    console.log(err);
  }
}

