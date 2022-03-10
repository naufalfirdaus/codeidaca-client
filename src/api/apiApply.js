import axios from 'axios';
import config from '../config/config';

const createApply = async(payload)=>{
    try {
        const result = await axios.post(`${config.domain}/apply`,payload);
        return result;    
    } catch (error) {
        return error;
    }
}
export default{
    createApply
}