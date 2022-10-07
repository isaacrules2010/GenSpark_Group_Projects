package com.genspark.spring_app.Dao;

import com.genspark.spring_app.Entity.PlayerCharacter;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CharacterDao extends JpaRepository<PlayerCharacter, Integer> {
}
