import React, {useState} from 'react'
import Nav from '../Components/Nav';

export default function NewCharacter() {

  const [char, setCharacter] = useState({
    user: "",
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
    {/*will run the post method*/}
    console.log({char});
  }

  return (
    <div>
      <Nav />
      <div className='separator'/>
      <div>New Character</div>
    </div>
  )
}

