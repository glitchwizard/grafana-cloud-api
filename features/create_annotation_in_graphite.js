import dotenv from 'dotenv';
dotenv.config();
import axios from 'axios';

const now = Date.now();

export default async function createAnnotationInGraphite(what = "", tags = [''], optional = { when: now, data: '' }) {
    const host = `http://${process.env.GRAFANA_USERNAME}:${process.env.GRAFANA_PASSWORD}@${process.env.GRAFANA_HOST}`;
    const path = `/api/annotations/graphite`;
    const url = `${host}${path}`;
    const config = {
        headers: {
            Authorization: `Bearer ${process.env.GRAFANA_TOKEN}`
        }
    };
    let data = { what, tags };
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