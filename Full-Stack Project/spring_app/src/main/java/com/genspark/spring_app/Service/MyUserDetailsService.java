package com.genspark.spring_app.Service;

import com.genspark.spring_app.Entity.User;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.crypto.password.PasswordEncoder;

import java.util.List;
import java.util.Optional;

public interface MyUserDetailsService extends UserDetailsService {
    List<User> findAllUsers();
    User getUserById(int userId);
    String addUser(User user);
    User updateUser(User user);
    String deleteUser(int userId);

    PasswordEncoder getEncoder();
}