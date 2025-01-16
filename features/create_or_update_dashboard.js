import dotenv from 'dotenv';
import axios from 'axios';

dotenv.config();

export default (dashboard = JSON, optional = { folderId: 0, folderUid: '', message: '', overwrite: false, refresh: '' }) => {
    const host = `http://${process.env.GRAFANA_USERNAME}:${process.env.GRAFANA_PASSWORD}@${process.env.GRAFANA_HOST}`;
    const path = `/api/dashboards/db`;
    const url = `${host}${path}`;

    const config = {
        headers: {
            Authorization: `Bearer ${process.env.GRAFANA_TOKEN}`
        }
    };

    const data = { dashboard, ...optional };

    return axios.post(url, data, config)
        .then(res => res.data)
        .catch(err => err.response.data);
};