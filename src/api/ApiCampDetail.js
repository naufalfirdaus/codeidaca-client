import axios from "axios";
import config from "../config/config";

const findAll = async(id)=>{
    console.log("sudah sampai di apiCampDetail");
    try {
        const result = await axios.get(`${config.domain}/bootcamp/${id}`);
        return result.data;    
    } catch (error) {
        return error;
    }
}

export default {
    findAll
}