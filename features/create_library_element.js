import dotenv from 'dotenv';
import axios from 'axios';

dotenv.config();

export default (data = { uid: '', folderId: 0, name: "", kind: 0, model: { description: '', type: '' } }) => {
    const host = `http://${process.env.GRAFANA_USERNAME}:${process.env.GRAFANA_PASSWORD}@${process.env.GRAFANA_HOST}`;
    const path = `/api/library-elements`;
    const url = `${host}${path}`;

    const config = {
        headers: {
            Authorization: `Bearer ${process.env.GRAFANA_TOKEN}`
        }
    };

    return axios.post(url, data, config)
        .then(res => res.data)
        .catch(err => err.response.data);
};