import React, {useState, useEffect} from 'react'
import Nav from '../Components/Nav';
import Service from '../Services/Service';
import '../NewChar.css';


export default function NewCharacter() {

  const [char, setCharacter] = useState({
    user: "",
    name: "Name",
    characterClass: "None",
    strength: "10",
    dexterity: "10",
    constitution: "10",
    wisdom: "10",
    intelligence: "10",
    charisma: "10"
  });
  const submitHandler = async e => {
    e.preventDefault();
    //Service.addCharacter(char).then(window.location.href = "http://localhost:3000/characters");
    const create = await Service.addCharacter(char);
    //console.log(create);
    if(create.data.includes("created")){
      window.location.href = "http://localhost:3000/characters";
    } 
  }

  useEffect(() => {
    setCharacter({...char, user: localStorage.getItem('username')});
    //eslint-disable-next-line react-hooks/exhaustive-deps
  },[]);

  return (
    <form className='charform' onSubmit={submitHandler}>
      <Nav />
      <div className='separator'/>
      <h1>New Character</h1>
      <div className='infoInput' id='keyInfo'>
        <label htmlFor='name'>Name:</label>
        <input type='text' name='name' id='name' defaultValue='Name' onChange={e=>setCharacter({...char, name: e.target.value})}/>
      </div>
      <div className='infoInput' id='keyInfo'>
        <label htmlFor='characterClass'>Class:</label>
        <input type='text' name='characterClass' id='characterClass' defaultValue="None" onChange={e=>setCharacter({...char, characterClass: e.target.value})}/>
      </div>
      <div className='infoInput'>
        <label htmlFor='strength'>STR:</label>
        <input type='number' name='strength' id='strength' max='20' min='0' defaultValue="10" onChange={e=>setCharacter({...char, strength: e.target.value})}/>
      </div>
      <div className='infoInput'>
        <label htmlFor='dexterity'>DEX:</label>
        <input type='number' name='dexterity' id='dexterity' max='20' min='0' defaultValue="10" onChange={e=>setCharacter({...char, dexterity: e.target.value})}/>
      </div>
      <div className='infoInput'>
        <label htmlFor='constitution'>CON:</label>
        <input type='number' name='constitution' id='constitution' max='20' min='0' defaultValue="10" onChange={e=>setCharacter({...char, constitution: e.target.value})}/>
      </div>
      <div className='infoInput'>
        <label htmlFor='wisdom'>WIS:</label>
        <input type='number' name='wisdom' id='wisdom' max='20' min='0' defaultValue="10" onChange={e=>setCharacter({...char, wisdom: e.target.value})}/>
      </div>
      <div className='infoInput'>
        <label htmlFor='intelligence'>INT:</label>
        <input type='number' name='intelligence' id='intelligence' max='20' min='0' defaultValue="10" onChange={e=>setCharacter({...char, intelligence: e.target.value})}/>
      </div>
      <div className='infoInput'>
        <label htmlFor='charisma'>CHA:</label>
        <input type='number' name='charisma' id='charisma' max='20' min='0' defaultValue="10" onChange={e=>setCharacter({...char, charisma: e.target.value})}/>
      </div>
      <div className='submit'>
        <input type='submit' value='CREATE'/>
        </div>
      <div className='newuser'></div>
    </form>

  )
}

