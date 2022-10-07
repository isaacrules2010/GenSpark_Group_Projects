import axios from "axios";
import { Buffer } from "buffer";

const BASE_URL = 'http://localhost:8080';
const config = {headers: {'Authorization':localStorage.getItem('token')}};

class Service {

    createUser = async (username,password,email) => {
        let res = await axios.post(BASE_URL+'/users',{username:username,password:password,email:email,active:true,roles:"ROLE_USER"});
        console.log(res);
    }


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
        return axios.get(BASE_URL+'/characters', config);
    }

    getCharacter(id) {
        return axios.get(BASE_URL+'/characters/'+id, config)
    }

    addCharacter(character){
        return axios.post(BASE_URL+'/characters', character, config);
    }
}

export default new Service();