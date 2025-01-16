import dotenv from 'dotenv';
import axios from 'axios';

dotenv.config();

const revokeAuthTokensOfActualUser = (authTokenId = 0) => {
    const host = `http://${process.env.GRAFANA_USERNAME}:${process.env.GRAFANA_PASSWORD}@${process.env.GRAFANA_HOST}`;
    const path = `/api/user/revoke-auth-token`;
    const url = host + path;
    const config = {
        headers: {
            Authorization: `Bearer ${process.env.GRAFANA_TOKEN}`
        }
    };
    const data = { authTokenId };
    return axios.post(url, data, config)
        .then(res => res.data)
        .catch(res => res.response.data);
};

export default revokeAuthTokensOfActualUser;