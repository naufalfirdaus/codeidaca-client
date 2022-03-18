import axios from "axios";
import config from "../config/config"

const talentList = async () => {
    try {
        const result = await axios.get(`${config.domain}/placement/`)
        return result.data;
    } catch (error) {
        return await error
    }
}

const createPlace = async (payload) => {
    try {
        const result = await axios.post(`${config.domain}/placement/`, payload);
        return result.data;
    } catch (error) {
        return error;
    }
};

const switchIdle = async (payload) => {
    try {
        const result = await axios.post(`${config.domain}/placement/status/`, payload);
        return result;
    } catch (error) {
        return error;
    }
};



export default {
    switchIdle,
    talentList,
    createPlace
};