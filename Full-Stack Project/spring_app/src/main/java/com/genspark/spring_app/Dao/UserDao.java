package com.genspark.spring_app.Dao;

import com.genspark.spring_app.Entity.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface UserDao extends JpaRepository<User,Integer> {
    Optional<User> findByUsername(String userName);
}
