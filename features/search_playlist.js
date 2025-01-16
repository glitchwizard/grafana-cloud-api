import dotenv from 'dotenv';
import axios from 'axios';

dotenv.config();

const searchPlaylist = (optional = { query: '', limit: 0 }) => {
    let parameters = `?`;
    if (Object.keys(optional).length !== 0) {
        const keys = Object.keys(optional);
        const value = Object.values(optional).map(val => val.includes(' ') ? val.replace(/ /g, '%20') : val);
        for (let i = 0; i < keys.length; i++) {
            parameters += `${keys[i]}=${value[i]}`;
            if (i !== keys.length - 1) parameters += '&';
        }
    }
    const host = `http://${process.env.GRAFANA_USERNAME}:${process.env.GRAFANA_PASSWORD}@${process.env.GRAFANA_HOST}`;
    const path = `/api/playlists${parameters}`;
    const url = host + path;
    const config = {
        headers: {
            Authorization: `Bearer ${process.env.GRAFANA_TOKEN}`
        }
    };
    return axios.get(url, config)
        .then(res => res.data)
        .catch(res => res.response.data);
};

export default searchPlaylist;