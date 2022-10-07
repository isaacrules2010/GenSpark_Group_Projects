import axios from "axios";
import { Buffer } from "buffer";

const BASE_URL = 'http://localhost:8080';

class Service {
    getToken = async(username,password) =>{
        const res = await fetch(BASE_URL+"/token", {
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
        return axios.get(BASE_URL+'/characters');
    }

    getCharacter(id) {
        return axios.get(BASE_URL+'/characters/'+id)
    }

    addCharacter(character){
        return axios.post(BASE_URL+'/characters/', character);
    }
}

export default new Service();