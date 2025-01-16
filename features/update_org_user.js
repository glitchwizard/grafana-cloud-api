import dotenv from 'dotenv';
import axios from 'axios';

dotenv.config();

const updateOrgUser = (orgId = 0, userId = 0, role = '') => {
    const host = `http://${process.env.GRAFANA_USERNAME}:${process.env.GRAFANA_PASSWORD}@${process.env.GRAFANA_HOST}`;
    const path = `/api/orgs/${orgId}/users/${userId}`;
    const url = host + path;
    const data = { role };
    return axios.patch(url, data)
        .then(res => res.data)
        .catch(res => res.response.data);
};

export default updateOrgUser;