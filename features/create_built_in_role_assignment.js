require('dotenv').config()
const { default: axios } = require("axios");

module.exports = function(roleUid='',builtinRole='',global=false){
    const host = `http://${process.env.GRAFANA_USERNAME}:${process.env.GRAFANA_PASSWORD}@${process.env.GRAFANA_HOST}`
    const path = `/api/access-control/builtin-roles`
    const url = host + path
    const data = {roleUid,builtinRole,global}
    return axios.post(url,data)
    .then(res=>{return res.data})
    .catch(res=>{return res.response.data})
}