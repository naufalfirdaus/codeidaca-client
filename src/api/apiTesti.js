import axios from "axios";
import config from "../config/config";

const findTesti = async()=>{
    try {
        const result = await axios.get(`http://localhost:3001/codeid/api/review/`);
        return  result.data;
    } catch (error) {
        return error;
        
    }
}

export default {
    findTesti,

}