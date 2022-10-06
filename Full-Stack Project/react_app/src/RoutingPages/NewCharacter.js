import React, {useState} from 'react'
import Nav from '../Components/Nav';
import Service from '../Services/Service';

export default function NewCharacter() {

  const [char, setCharacter] = useState({
    user: "ADMIN",
    name: "",
    characterClass: "",
    strength: "",
    dexterity: "",
    constitution: "",
    wisdom: "",
    intelligence: "",
    charisma: ""
  });

  const submitHandler = e => {
    e.preventDefault();
    console.log(char);
    Service.addCharacter(char);
  }

  return (
    <form onSubmit={submitHandler}>
      <Nav />
      <div className='separator'/>
      <div>New Character</div>
      <div className='infoInput' id='keyInfo'>
        <label htmlFor='name'>Name:</label>
        <input type='text' name='name' id='name' onChange={e=>setCharacter({...char, name: e.target.value})} value={char.name}/>
      </div>
      <div className='infoInput' id='keyInfo'>
        <label htmlFor='characterClass'>Class:</label>
        <input type='text' name='characterClass' id='characterClass' onChange={e=>setCharacter({...char, characterClass: e.target.value})} value={char.characterClass}/>
      </div>
      <div className='infoInput'>
        <label htmlFor='strength'>STR:</label>
        <input type='text' name='strength' id='strength' onChange={e=>setCharacter({...char, strength: e.target.value})} value={char.strength}/>
      </div>
      <div className='infoInput'>
        <label htmlFor='dexterity'>DEX:</label>
        <input type='text' name='dexterity' id='dexterity' onChange={e=>setCharacter({...char, dexterity: e.target.value})} value={char.dexterity}/>
      </div>
      <div className='infoInput'>
        <label htmlFor='constitution'>CON:</label>
        <input type='text' name='constitution' id='constitution' onChange={e=>setCharacter({...char, constitution: e.target.value})} value={char.constitution}/>
      </div>
      <div className='infoInput'>
        <label htmlFor='wisdom'>WIS:</label>
        <input type='text' name='wisdom' id='wisdom' onChange={e=>setCharacter({...char, wisdom: e.target.value})} value={char.wisdom}/>
      </div>
      <div className='infoInput'>
        <label htmlFor='intelligence'>INT:</label>
        <input type='text' name='intelligence' id='intelligence' onChange={e=>setCharacter({...char, intelligence: e.target.value})} value={char.intelligence}/>
      </div>
      <div className='infoInput'>
        <label htmlFor='charisma'>CHA:</label>
        <input type='text' name='charisma' id='charisma' onChange={e=>setCharacter({...char, charisma: e.target.value})} value={char.charisma}/>
      </div>
      <input type='submit' value='CREATE'/>
    </form>
  )
}

