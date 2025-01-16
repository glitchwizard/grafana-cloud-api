import dotenv from 'dotenv';
import axios from 'axios';

dotenv.config();

const updatePermissions = (user_id = 0, update_permissions = {}) => {
    const host = `http://${process.env.GRAFANA_USERNAME}:${process.env.GRAFANA_PASSWORD}@${process.env.GRAFANA_HOST}`;
    const path = `/api/admin/users/${user_id}/permissions`;
    const url = host + path;
    const data = update_permissions;

    return axios.put(url, data)
        .then(res => res.data)
        .catch(res => res.response.data);
};

export default updatePermissions;