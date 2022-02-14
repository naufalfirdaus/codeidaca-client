import axios from "axios";
import config from "../config/config";

const candidateList = async()=>{
    try {
        const result = await axios.get(`${config.domain}/candidat/`)
        return result.data;
    } catch (error) {
        return await error
    }
}

const updateCandidateStatus = async(data)=>{
    try {
        const result = await axios.put(`${config.domain}/candidat/${data.tale_id}`,
        data);
        return  result;
    } catch (error) {
        return error;
        
    }
}


export default {
    candidateList,
    updateCandidateStatus
}