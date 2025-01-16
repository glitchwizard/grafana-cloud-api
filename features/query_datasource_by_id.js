import dotenv from 'dotenv';
import axios from 'axios';

dotenv.config();

export default function(from = 0, to = 0, queries = [
    {
        refId: "A",
        intervalMs: 86400000,
        maxDataPoints: 1092,
        datasourceId: 0,
        rawSql: "",
        format: "time_series"
    }
]) {
    const host = `http://${process.env.GRAFANA_USERNAME}:${process.env.GRAFANA_PASSWORD}@${process.env.GRAFANA_HOST}`;
    const path = `/api/tsdb/query`;
    const url = host + path;

    const config = {
        headers: {
            Authorization: `Bearer ${process.env.GRAFANA_TOKEN}`
        }
    };

    const data = JSON.stringify({ from, to, queries });

    return axios.post(url, data, config)
        .then(res => res.data)
        .catch(res => res.response.data);
}