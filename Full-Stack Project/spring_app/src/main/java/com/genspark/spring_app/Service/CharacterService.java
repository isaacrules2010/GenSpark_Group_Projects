package com.genspark.spring_app.Service;

import com.genspark.spring_app.Entity.PlayerCharacter;

import java.util.List;

public interface CharacterService{
    List<PlayerCharacter> getAllCharacters();
    PlayerCharacter getCharacterById(int id);
    String addCharacter(PlayerCharacter character);
    List<PlayerCharacter> getCharactersByUser(String user);
}
