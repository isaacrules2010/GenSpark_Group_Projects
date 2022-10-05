package com.genspark.spring_app.Service;

import com.genspark.spring_app.Dao.CharacterDao;
import com.genspark.spring_app.Entity.PlayerCharacter;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

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
        return null;
    }

    @Override
    public PlayerCharacter addCharacter(PlayerCharacter character) {
        return null;
    }
}
