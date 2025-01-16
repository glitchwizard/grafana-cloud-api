import dotenv from 'dotenv';
dotenv.config();
import axios from 'axios';

export default async function create_org(new_org_name = '', role = '') {
    const host = `http://${process.env.GRAFANA_USERNAME}:${process.env.GRAFANA_PASSWORD}@${process.env.GRAFANA_HOST}`
    const path = `/api/orgs`
    const url = host + path
    const data = {
        name: new_org_name,
        role
    }
    try {
        const res = await axios.post(url, data);
        return res.data;
    } catch (err) {
        return err.response?.data;
    }
}