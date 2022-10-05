import React, { Component } from 'react'
import Nav from '../Componets/Nav';
import Service from '../Services/Service';

const baseUrl = "http://localhost:3000/";

export default class CharacterList extends Component {
    

    constructor(){
        super();
        this.state = {
            characters:[]
        }
    }
    
    //runs as soon as the component is loaded
    componentDidMount(){
        Service.getCharacters().then(res => {
            this.setState({characters: res.data})
        });
    }

  render() {
    return (
      <form>
        <Nav />
        <div className='separator'/>
        <div>
           <ul title='Characters'>
            {this.state.characters.map(
                character=>
                <li key={character.id}>
                    <label htmlFor='charName'>{character.user} - </label>
                    <a name = 'charName' id='charName' href={baseUrl + 'characters/' +character.id}>{character.name}</a>
                </li>
            )}
           </ul>
        </div>
      </form>
    )
  }
}

