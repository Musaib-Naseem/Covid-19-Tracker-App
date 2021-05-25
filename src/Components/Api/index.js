
import Axios from "axios";

const url="https://covid19.mathdro.id/api";


export const fetchData=async()=>{
try{
const response= await Axios.get(url);

return response;

}

catch(error){

    console.log(error);

}

}