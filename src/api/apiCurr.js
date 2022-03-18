import axios from "axios";
import config from "../config/config";

const findAll = async()=>{
    try {
      //  const result = await axios.get(`http://localhost:3001/codeid/api/curriculum/`);
       const result = await axios.get(`${config.domain}/curriculum`);
        return  result.data;
    } catch (error) {
        return error;
        
    }
}

const findRegular = async()=>{
    try {
        const result = await axios.get(`http://localhost:3001/codeid/api/curriculum/regular`);
        return  result.data;
    } catch (error) {
        return error;
        
    }
}

const findBerbayar = async()=>{
    try {
        const result = await axios.get(`http://localhost:3001/codeid/api/curriculum/berbayar`);
        return  result.data;
    } catch (error) {
        return error;
        
    }
}

export default {
    findAll,
    findRegular,
    findBerbayar

}