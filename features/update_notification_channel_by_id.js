import dotenv from 'dotenv';
import axios from 'axios';

dotenv.config();

const updateNotificationChannelById = (id = 0, data = { name: "", type: "", isDefault: false, sendReminder: false, frequency: "", settings: {} }) => {
    const host = `http://${process.env.GRAFANA_USERNAME}:${process.env.GRAFANA_PASSWORD}@${process.env.GRAFANA_HOST}`;
    const path = `/api/alert-notifications/${id}`;
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

export default updateNotificationChannelById;