import React, { Component } from 'react'
import Nav from '../Components/Nav';
import Service from '../Services/Service';
import '../CharList.css';
import jwt_decode from 'jwt-decode';

const baseUrl = "http://localhost:3000/characters/";

export default class CharacterList extends Component {
    

    constructor(){
        super();
        this.state = {
            characters:[],
            user:""
        }
    }
    
    //runs as soon as the component is loaded
    componentDidMount(){
      let username = "";
      if(localStorage.getItem('token')!== null){
        username = String(jwt_decode(localStorage.getItem('token').replace('Bearer ','')).sub);
      }
      //console.log(username);
        Service.getCharactersByUser(username).then(res => {
            this.setState({characters: res.data, user: username})
        });
    }

  render() {
    return (
      <form className='charlist'>
        <Nav />
        <div className='separator'/>
        <div>
           <ul className='title' title='Characters'>
            <h1>Character List</h1>
            {this.state.characters.map(
                character=>
                <li key={character.id}>
                    <label htmlFor='charName'>Created By: {character.user} - </label>
                    <a className='link' name = 'charName' id='charName' href={baseUrl + character.id}>{character.name}</a>
                </li>
            )}
            {(this.state.user !== "") &&
              <li><a href={baseUrl + 'newCharacter'}>Create Character</a></li>
            }
            {(this.state.user === "") && 
              <div>
                You must be logged in to view character list
                <div className='separator'/>
                <a href={'http://localhost:3000/login'}>Login</a>
              </div>
            }
           </ul>
        </div>
      </form>
    )
  }
}

