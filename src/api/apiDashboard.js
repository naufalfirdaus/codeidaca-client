import axios from 'axios';
import config from '../config/config'

const getSummary = async() => {
    try {
        const result = await axios.get(`${config.domain}/dashboard/`);
        return result.data;
    } catch (error) {
        return error;
    }
}

const getJurusan = async() => {
    try {
        const result = await axios.get(`${config.domain}/dashboard/jurusan`);
        return result.data;
    } catch (error) {
        return error;
    }
}

const getPendidikan = async() => {
    try {
        const result = await axios.get(`${config.domain}/dashboard/pendidikan`);
        return result.data;
    } catch (error) {
        return error;
    }
}

const getUniversitas = async() => {
    try {
        const result = await axios.get(`${config.domain}/dashboard/universitas`);
        return result.data;
    } catch (error) {
        return error;
    }
}

const getBoardIdle = async() => {
    try {
        const result = await axios.get(`${config.domain}/dashboard/boardvidle`);
        return result.data;
    } catch (error) {
        return error;
    }
}

const getInterest = async() => {
    try {
        const result = await axios.get(`${config.domain}/dashboard/interest`);
        return result.data;
    } catch (error) {
        return error;
    }
}

const getApplicant = async() => {
    try {
        const result = await axios.get(`${config.domain}/dashboard/applicant`);
        return result.data;
    } catch (error) {
        return error;
    }
}

export default {
    getSummary,
    getJurusan,
    getPendidikan,
    getUniversitas,
    getApplicant,
    getBoardIdle,
    getInterest
}