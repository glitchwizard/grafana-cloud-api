import dotenv from 'dotenv';
import axios from 'axios';

dotenv.config();

const updateFolder = (uid = "", title = '', optional = { overwrite: false, version: 0 }) => {
    const host = `http://${process.env.GRAFANA_USERNAME}:${process.env.GRAFANA_PASSWORD}@${process.env.GRAFANA_HOST}`;
    const path = `/api/folders/${uid}`;
    const url = host + path;
    const config = {
        headers: {
            Authorization: `Bearer ${process.env.GRAFANA_TOKEN}`
        }
    };
    const data = { title, ...optional };

    return axios.put(url, data, config)
        .then(res => res.data)
        .catch(res => res.response.data);
};

export default updateFolder;