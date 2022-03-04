import axios from "axios";
import config from "../config/config";

const findAll = async () => {
    try {
        const result = await axios.get(`${config.domain}/testimoni/`);
        return result.data;
    } catch (error) {
        return error;
    }
};
const findBySql = async () => {
    try {
        const result = await axios.get(`${config.domain}/testimoni/bysql/`);
        return result.data;
    } catch (error) {
        return error;
    }
};

export default {findAll, findBySql}
