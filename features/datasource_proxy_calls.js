import dotenv from 'dotenv';
import axios from 'axios';

dotenv.config();

export default (datasourceId = 0) => {
    const host = `http://${process.env.GRAFANA_USERNAME}:${process.env.GRAFANA_PASSWORD}@${process.env.GRAFANA_HOST}`;
    const path = `/api/datasources/proxy/${datasourceId}/*`;
    const url = `${host}${path}`;

    const config = {
        headers: {
            Authorization: `Bearer ${process.env.GRAFANA_TOKEN}`
        }
    };

    return axios.get(url, config)
        .then(res => res.data)
        .catch(err => err.response.data);
};