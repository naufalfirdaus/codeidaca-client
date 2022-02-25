import axios from "axios";
import config from "../config/config"


const switchIdle = async (payload) => {
    try {
        const result = await axios.post(`${config.domain}/placement/idle`, payload);
        return result;
    } catch (error) {
        return error;
    }
};

export default {
    switchIdle
};