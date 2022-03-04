import axios from "axios"
import config from "../config/config"

const findAll = async () => {
    try {
        const result = await axios.get(`${config.domain}/talent/`)
        return result.data;
    } catch (error) {
        return await error
    }
}

const findDetail = async (id) => {
    try {
        const result = await axios.get(`${config.domain}/talent/${id}`);
        return result.data;
    } catch (error) {
        return await error
    }
}

export default {
    findAll,
    findDetail,
}