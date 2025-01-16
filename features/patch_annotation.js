import dotenv from 'dotenv';
import axios from 'axios';

dotenv.config();

const patchAnnotation = (id = 0, tags = [''], text = '') => {
    const host = `http://${process.env.GRAFANA_USERNAME}:${process.env.GRAFANA_PASSWORD}@${process.env.GRAFANA_HOST}`;
    const path = `/api/annotations/${id}`;
    const url = host + path;
    const config = {
        headers: {
            Authorization: `Bearer ${process.env.GRAFANA_TOKEN}`
        }
    };
    const data = { tags, text };

    return axios.patch(url, data, config)
        .then(res => res.data)
        .catch(res => res.response.data);
};

export default patchAnnotation;