require('dotenv').config()
const { default: axios } = require("axios");

module.exports = function (user_id=0){
    const host = `http://${process.env.GRAFANA_USERNAME}:${process.env.GRAFANA_PASSWORD}@${process.env.GRAFANA_HOST}`
    const path = `/api/admin/users/${user_id}`
    const url = host + path
    return axios.delete(url)
    .then(res=>{return res.data})
    .catch(res=>{return res.response.data})
}