import dotenv from 'dotenv';
import axios from 'axios';

dotenv.config();

const updateTeam = (id = 0, name = '', email = '') => {
    const host = `http://${process.env.GRAFANA_USERNAME}:${process.env.GRAFANA_PASSWORD}@${process.env.GRAFANA_HOST}`;
    const path = `/api/teams/${id}`;
    const url = host + path;
    const config = {
        headers: {
            Authorization: `Bearer ${process.env.GRAFANA_TOKEN}`
        }
    };
    const data = { name, email };

    return axios.put(url, data, config)
        .then(res => res.data)
        .catch(res => res.response.data);
};

export default updateTeam;