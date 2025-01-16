import dotenv from 'dotenv';
import axios from 'axios';

dotenv.config();

const sendAReport = (id = 0, optional = { useEmailsFromReport: true, emails: '' }) => {
    const host = `http://${process.env.GRAFANA_USERNAME}:${process.env.GRAFANA_PASSWORD}@${process.env.GRAFANA_HOST}`;
    const path = `/api/reports/email`;
    const url = host + path;
    const config = {
        headers: {
            Authorization: `Bearer ${process.env.GRAFANA_TOKEN}`
        }
    };
    const data = { id, ...optional };

    return axios.post(url, data, config)
        .then(res => res.data)
        .catch(res => res.response.data);
};

export default sendAReport;