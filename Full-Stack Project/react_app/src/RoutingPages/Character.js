import React, { useEffect, useState } from 'react'
import Nav from '../Components/Nav'
import { useParams } from 'react-router-dom';
import Service from '../Services/Service';
import '../CharDisplay.css';

const Character = () => {
    
    
    let { id } = useParams();
    const [char, setChar] = useState({});

    function getScore(num){
        var score = Math.floor((num - 10)/2);
        if(score >= 0){
            score = '+' + score;
        }
        return score;
    }

    useEffect(()=>{
        Service.getCharacter(id)
            .then(res=>res.data)
            .then((data) => {setChar(data)});
    },[id])

  return (
    <form>
        <Nav />
        <div className='characterDisplayForm'>
            <div className='charInfo'>
                <div id='charName'>
                    Name: {char.name}
                </div>
                <div id='charClass'>
                    Class: {char.characterClass}
                </div>
                <div id='charUser'>
                    Created By: {char.user}
                </div>
            </div>
            <div className='statDisplay'>
                <h3>STR</h3>
                <h4>{char.strength}</h4>
                <p className='modifier'>{getScore(char.strength)}</p>
            </div>
            <div className='statDisplay'>
                <h3>CON</h3>
                <h4>{char.constitution}</h4>
                <p className='modifier'>{getScore(char.constitution)}</p>
            </div>
            <div className='statDisplay'>
                <h3>DEX</h3>
                <h4>{char.dexterity}</h4>
                <p className='modifier'>{getScore(char.dexterity)}</p>
            </div>
            <div className='statDisplay'>
                <h3>INT</h3>
                <h4>{char.intelligence}</h4>
                <p className='modifier'>{getScore(char.intelligence)}</p>
            </div>
            <div className='statDisplay'>
                <h3>WIS</h3>
                <h4>{char.wisdom}</h4>
                <p className='modifier'>{getScore(char.wisdom)}</p>
            </div>
            <div className='statDisplay'>
                <h3>CHA</h3>
                <h4>{char.charisma}</h4>
                <p className='modifier'>{getScore(char.charisma)}</p>
            </div>
        </div>
    </form>
  )
}

export default Character