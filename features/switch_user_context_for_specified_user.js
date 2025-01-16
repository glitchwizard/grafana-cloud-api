import dotenv from 'dotenv';
import axios from 'axios';

dotenv.config();

const switchUserContextForSpecifiedUser = (userId = 0, organizationId = 0) => {
    const host = `http://${process.env.GRAFANA_USERNAME}:${process.env.GRAFANA_PASSWORD}@${process.env.GRAFANA_HOST}`;
    const path = `/api/users/${userId}/using/${organizationId}`;
    const url = host + path;
    return axios.post(url)
        .then(res => res.data)
        .catch(res => res.response.data);
};

export default switchUserContextForSpecifiedUser;