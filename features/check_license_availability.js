import dotenv from 'dotenv';
dotenv.config();
import axios from 'axios';

export default async function checkLicenseAvailability() {
    const host = `http://${process.env.GRAFANA_USERNAME}:${process.env.GRAFANA_PASSWORD}@${process.env.GRAFANA_HOST}`;
    const path = `/api/licensing/check/`;
    const url = `${host}${path}`;
    const config = {
        headers: {
            Authorization: `Bearer ${process.env.GRAFANA_TOKEN}`
        }
    };

    try {
        const res = await axios.get(url, config);
        return res.data;
    } catch (res) {
        return res.response.data;
    }
}