import axios from "axios";
import config from "../config/config";

const findAll = async () => {
    try {
        const result = await axios.get(`${config.domain}/instructor/`);
        return result.data;
    } catch (error) {
        return error;
    }
};

export default {findAll}