import dotenv from 'dotenv';
import axios from 'axios';

dotenv.config();

const searchAllOrgs = (perpage = 0, page = 0) => {
    const host = `http://${process.env.GRAFANA_USERNAME}:${process.env.GRAFANA_PASSWORD}@${process.env.GRAFANA_HOST}`;
    const path = `/api/orgs?perpage=${perpage}&page=${page}`;
    const url = host + path;
    return axios.get(url)
        .then(res => res.data)
        .catch(res => res.response.data);
};

export default searchAllOrgs;