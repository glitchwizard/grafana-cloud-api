import dotenv from 'dotenv';
import axios from 'axios';

dotenv.config();

const setUserRoleAssignments = (userId = 0, global = false, roleUids = ['']) => {
    const host = `http://${process.env.GRAFANA_USERNAME}:${process.env.GRAFANA_PASSWORD}@${process.env.GRAFANA_HOST}`;
    const path = `/api/access-control/users/${userId}/roles`;
    const url = host + path;
    const data = { global, roleUids };
    return axios.put(url, data)
        .then(res => res.data)
        .catch(res => res.response.data);
};

export default setUserRoleAssignments;