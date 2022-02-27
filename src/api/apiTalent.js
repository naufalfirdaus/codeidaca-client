import axios from 'axios';
import config from '../config/config'

const getTalent = async(id) => {
    try {
        const result = await axios.get(`${config.domain}/talent/${id}`);
        return result.data;
    } catch (error) {
        return error;
    }
}

const updateTalent = async(payload) => {
    const tale_user_id = parseInt(payload.get("tale_user_id"))
    try{
        const result = await axios.put(`${config.domain}/talent/${tale_user_id}`,payload)
        return result
    }catch(error){
        return error;
    }
}


const updateTalentNoFile = async(payload) => {
    const tale_user_id = payload.tale_user_id
    try{
        const result = await axios.put(`${config.domain}/talent/data/${payload.tale_user_id}`,payload)
        return result
    }catch(error){
        return error;
    }
}

export default{
    getTalent,
    updateTalent,
    updateTalentNoFile
}