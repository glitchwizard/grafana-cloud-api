import dotenv from 'dotenv';
dotenv.config();
import axios from 'axios';

export default async function add_admin_user_to_org(org_id=0,add_admin_username="",add_role=""){
    const host = `http://${process.env.GRAFANA_USERNAME}:${process.env.GRAFANA_PASSWORD}@${process.env.GRAFANA_HOST}`
    const path = `/api/orgs/${org_id}/users`
    const url = host + path

    const data = {
        "loginOrEmail" : add_admin_username, 
        "role": add_role
    }

    try {
        const res = await axios.post(url, data);
        return res.data;
    } catch (res) {
        return res.response.data;
    }
}