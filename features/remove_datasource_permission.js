import dotenv from 'dotenv';
import axios from 'axios';

dotenv.config();

const removeDatasourcePermission = (id = 0, permissionId = 0) => {
    const host = `http://${process.env.GRAFANA_USERNAME}:${process.env.GRAFANA_PASSWORD}@${process.env.GRAFANA_HOST}`;
    const path = `/api/datasources/${id}/permissions/${permissionId}`;
    const url = host + path;
    const config = {
        headers: {
            Authorization: `Bearer ${process.env.GRAFANA_TOKEN}`
        }
    };
    return axios.delete(url, config)
        .then(res => res.data)
        .catch(res => res.response.data);
};

export default removeDatasourcePermission;