package com.genspark.spring_app.Service;

import com.genspark.spring_app.Dao.CharacterDao;
import com.genspark.spring_app.Entity.PlayerCharacter;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class CharacterServiceImpl implements CharacterService{

    @Autowired
    private CharacterDao characters;
    @Override
    public List<PlayerCharacter> getAllCharacters() {
        return this.characters.findAll();
    }

    @Override
    public PlayerCharacter getCharacterById(int id) {
        Optional<PlayerCharacter> c = this.characters.findById(id);
        PlayerCharacter character = null;

        if(c.isPresent()){
            character = c.get();
        }
        else{
            throw new RuntimeException("Character not found with id :: " + id);
        }
        return character;
    }

    @Override
    public String addCharacter(PlayerCharacter character) {
        List<PlayerCharacter> before = this.characters.findAll();
        this.characters.save(character);
        List<PlayerCharacter> after = this.characters.findAll();
        if(before.size() < after.size()){
            return "successfully created character with name: " + character.getName();
        }
        else{
            return "failed";
        }
    }
}
