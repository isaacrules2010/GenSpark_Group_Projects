import React, { useEffect, useState } from 'react'
import Nav from '../Componets/Nav'
import { useParams } from 'react-router-dom';
import Service from '../Services/Service';
import '../App.css';

const Character = () => {
    
    
    let { id } = useParams();
    const [char, setChar] = useState({});

    function getCharacter() {
        Service.getCharacter(id)
            .then(res=>res.data)
            .then((data) => {setChar(data)});
    }

    function getScore(num){
        return (num - 10)/2;
    }

    useEffect(()=>{
        getCharacter();
    }, [])
  return (
    <form>
        <Nav />
        <div class='separator'/>
        <div className='characterDisplayForm'>
            <div className='charInfo'>
                <span id='charName'>
                    Name: {char.name}
                </span>
                <span id='charUser'>
                    Created By: {char.user}
                </span>
            </div>
            <div className='statDisplay'>
                <h3>STR</h3>
                <h4>{char.strength}</h4>
                <p>{getScore(char.strength)}</p>
            </div>
            <div className='statDisplay'>
                <h3>CON</h3>
                <h4>{char.constitution}</h4>
                <p>{getScore(char.constitution)}</p>
            </div>
            <div className='statDisplay'>
                <h3>DEX</h3>
                <h4>{char.dexterity}</h4>
                <p>{getScore(char.dexterity)}</p>
            </div>
            <div className='statDisplay'>
                <h3>INT</h3>
                <h4>{char.intelligence}</h4>
                <p>{getScore(char.intelligence)}</p>
            </div>
            <div className='statDisplay'>
                <h3>WIS</h3>
                <h4>{char.wisdom}</h4>
                <p>{getScore(char.wisdom)}</p>
            </div>
            <div className='statDisplay'>
                <h3>CHA</h3>
                <h4>{char.charisma}</h4>
                <p>{getScore(char.charisma)}</p>
            </div>
        </div>
    </form>
  )
}

export default Character