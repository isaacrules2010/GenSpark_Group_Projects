import axios from "axios";

const CHARACTERS_URL = 'http://localhost:8080/characters';

class Service {
    getCharacters() {
        return axios.get(CHARACTERS_URL);
    }

    getCharacter(id) {
        return axios.get(CHARACTERS_URL+'/'+id)
    }

    addCharacter(character){
        return axios.post(CHARACTERS_URL, character);
    }
}

export default new Service();