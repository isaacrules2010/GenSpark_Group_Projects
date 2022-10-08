package com.genspark.spring_app.Service;
import com.genspark.spring_app.Dao.UserDao;
import com.genspark.spring_app.Entity.MyUserDetails;
import com.genspark.spring_app.Entity.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class MyUserDetailsServiceImp implements MyUserDetailsService {

    @Autowired
    UserDao userDao;

    PasswordEncoder passwordEncoder = new BCryptPasswordEncoder();


    @Override
    public List<User> findAllUsers() {
        return this.userDao.findAll();
    }

    @Override
    public User getUserById(int userId) {
        Optional<User> user = this.userDao.findById(userId);
        if(user.isPresent()){
            return user.get();
        }else {
            throw new RuntimeException("UserId not found: " + userId);
        }
    }

    @Override
    public String addUser(User user) {
        Optional<User> innerUser = userDao.findByUsername(user.getUsername());
        if(innerUser.isEmpty()) {
            String passwordEncode = passwordEncoder.encode(user.getPassword());
            user.setPassword(passwordEncode);
            userDao.save(user);
        }else{
            return "User is already in the system";
        }
        return "successful new user";
    }

    @Override
    public User updateUser(User user) {
        String passwordEncode = passwordEncoder.encode(user.getPassword());
        user.setPassword(passwordEncode);
        return userDao.save(user);
    }

    @Override
    public String deleteUser(int userId) {
        this.userDao.deleteById(userId);
        return "User Deleted by Id: " + userId;
    }


    @Override
    public PasswordEncoder getEncoder() {
        return this.passwordEncoder;
    }

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        return userDao.findByUsername(username)
                .map(MyUserDetails::new)
                .orElseThrow(()->new UsernameNotFoundException("Username not found: " + username));
    }
}
