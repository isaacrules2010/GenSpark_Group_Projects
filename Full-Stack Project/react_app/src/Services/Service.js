import axios from "axios";
import { Buffer } from "buffer";

const BASE_URL = 'http://localhost:8080';
const config = { headers: { 'Authorization': localStorage.getItem('token') } };

class Service {

  loginAdmin = async (adminName, password) => {
    const res = await fetch(BASE_URL + "/admin", {
      method: 'post',
      headers: new Headers({
        'Authorization': 'Basic ' + Buffer.from(adminName + ":" + password).toString('base64')
      })
    })
    if (!res.ok) {
      if ([401, 403].includes(res.status)) {
        return '';
      }
    }
    const token = await this.getToken(adminName,password);
    return token;
  }

  createUser = async (username, password, email) => {
    let data = await axios.post(BASE_URL + '/users', { username: username, password: password, email: email, active: true, roles: "ROLE_USER" }).then(data => data.data);
    console.log(data)
    return JSON.stringify(data);
  }


  getToken = async (username, password) => {
    const res = await fetch(BASE_URL + "/token", {
      method: 'post',
      headers: new Headers({
        'Authorization': 'Basic ' + Buffer.from(username + ":" + password).toString('base64')
      })
    })
    if (!res.ok) {
      if ([401, 403].includes(res.status)) {
        localStorage.removeItem('token');
        return '';
      }
    }

    let data = await res.text();
    return data;
  }

  getCharacters() {
    return axios.get(BASE_URL + '/characters', config);
  }

  getCharactersByUser(user) {
    return axios.get(BASE_URL + '/characters/user=' + user, config);
  }

  getCharacter(id) {
    return axios.get(BASE_URL + '/characters/' + id, config)
  }

  addCharacter(character) {
    return axios.post(BASE_URL + '/characters', character, config);
  }

  getUsers() {
    return axios.get(BASE_URL + '/users', config);
  }
}

export default new Service();