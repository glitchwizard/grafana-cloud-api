import dotenv from 'dotenv';
import axios from 'axios';

dotenv.config();

const updateOrg = (orgId = 0, name = '') => {
    const host = `http://${process.env.GRAFANA_USERNAME}:${process.env.GRAFANA_PASSWORD}@${process.env.GRAFANA_HOST}`;
    const path = `/api/orgs/${orgId}`;
    const url = host + path;
    const data = { name };
    return axios.put(url, data)
        .then(res => res.data)
        .catch(res => res.response.data);
};

export default updateOrg;