import axios from "axios";
import config from "../config/config";

const findAll = async()=>{
    try {
        const result = await axios.get(`http://localhost:3001/codeid/curriculum/`);
        return  result.data;
    } catch (error) {
        return error;
        
    }
}

const findRegular = async()=>{
    try {
        const result = await axios.get(`http://localhost:3001/codeid/curriculum/Regular`);
        return  result.data;
    } catch (error) {
        return error;
        
    }
}

const findBerbayar = async()=>{
    try {
        const result = await axios.get(`http://localhost:3001/codeid/curriculum/Berbayar`);
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