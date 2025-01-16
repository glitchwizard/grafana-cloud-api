import dotenv from 'dotenv';
import axios from 'axios';

dotenv.config();

const updateAnnotation = (id = 0, tags = [''], text = '', optional = { time: Date.now(), timeEnd: Date.now() }) => {
    const host = `http://${process.env.GRAFANA_USERNAME}:${process.env.GRAFANA_PASSWORD}@${process.env.GRAFANA_HOST}`;
    const path = `/api/annotations/${id}`;
    const url = host + path;
    const config = {
        headers: {
            Authorization: `Bearer ${process.env.GRAFANA_TOKEN}`
        }
    };
    const data = { tags, text, ...optional };
    return axios.put(url, data, config)
        .then(res => res.data)
        .catch(res => res.response.data);
};

export default updateAnnotation;