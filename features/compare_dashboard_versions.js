import dotenv from 'dotenv';
dotenv.config();
import axios from 'axios';

export default async function compareDashboardVersions(first_dashboard = { dashboardId: 0, version: 0 }, second_dashboard = { dashboardId: 0, version: 0 }) {
    const host = `http://${process.env.GRAFANA_USERNAME}:${process.env.GRAFANA_PASSWORD}@${process.env.GRAFANA_HOST}`;
    const path = `/api/dashboards/calculate-diff`;
    const url = `${host}${path}`;
    const config = {
        headers: {
            Authorization: `Bearer ${process.env.GRAFANA_TOKEN}`
        }
    };
    const data = {
        Base: first_dashboard,
        New: second_dashboard,
        DiffType: "json"
    };

    try {
        const res = await axios.post(url, data, config);
        return res.data;
    } catch (res) {
        return res.response.data;
    }
}