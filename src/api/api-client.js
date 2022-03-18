import axios from "axios"
import config from "../config/config"

const findAll = async () => {
    try {
        const result = await axios.get(`${config.domain}/client/`)
        return result.data;
    } catch (error) {
        return await error
    }
}

const findClient = async (id) => {
    try {
        const result = await axios.get(`${config.domain}/client/${id}`);
        return result.data;
    } catch (error) {
        return await error
    }
}

export default {
    findAll,
    findClient
}