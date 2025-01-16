import dotenv from 'dotenv';
import axios from 'axios';

dotenv.config();

export default (uid = '', force = false) => {
    const host = `http://${process.env.GRAFANA_USERNAME}:${process.env.GRAFANA_PASSWORD}@${process.env.GRAFANA_HOST}`;
    const path = `/api/access-control/roles/${uid}?force=${force}`;
    const url = `${host}${path}`;

    return axios.delete(url)
        .then(res => res.data)
        .catch(err => err.response.data);
};