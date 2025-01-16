import dotenv from 'dotenv';
dotenv.config();
import axios from 'axios';

const now = Date.now();

export default async function createAnnotation(tags = [''], text = '', optional = { time: now, timeEnd: now }) {
    const host = `http://${process.env.GRAFANA_USERNAME}:${process.env.GRAFANA_PASSWORD}@${process.env.GRAFANA_HOST}`;
    const path = `/api/annotations`;
    const url = `${host}${path}`;
    const config = {
        headers: {
            Authorization: `Bearer ${process.env.GRAFANA_TOKEN}`
        }
    };
    let data = { tags, text };
    if (optional !== {}) {
        const keys = Object.keys(optional);
        const value = Object.values(optional);
        for (let i = 0; i < keys.length; i++) {
            data[keys[i]] = value[i];
        }
    }

    try {
        const res = await axios.post(url, data, config);
        return res.data;
    } catch (res) {
        return res.response.data;
    }
}