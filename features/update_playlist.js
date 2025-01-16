import dotenv from 'dotenv';
import axios from 'axios';

dotenv.config();

const updatePlaylist = (id = 0, data = { name: "", interval: "5m", items: [{ type: "", value: '', order: 1, title: "" }] }) => {
    const host = `http://${process.env.GRAFANA_USERNAME}:${process.env.GRAFANA_PASSWORD}@${process.env.GRAFANA_HOST}`;
    const path = `/api/playlists/${id}`;
    const url = host + path;
    const config = {
        headers: {
            Authorization: `Bearer ${process.env.GRAFANA_TOKEN}`
        }
    };

    return axios.put(url, data, config)
        .then(res => res.data)
        .catch(res => res.response.data);
};

export default updatePlaylist;