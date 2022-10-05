package com.genspark.spring_app.Controller;
import com.genspark.spring_app.Entity.PlayerCharacter;
import com.genspark.spring_app.Entity.User;
import com.genspark.spring_app.Service.CharacterService;
import com.genspark.spring_app.Service.MyUserDetailsService;
import com.genspark.spring_app.Service.TokenService;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
public class JavaController {

    private static final Logger LOG = LoggerFactory.getLogger(JavaController.class);
    @Autowired
    MyUserDetailsService userDetailsService;

    @Autowired
    CharacterService characterService;

    @Autowired
    TokenService tokenService;


    @PostMapping("/token")
    public String token(Authentication authentication){
        LOG.debug("Token requested for user: {}",authentication.getName());
        String token = tokenService.generateToken(authentication);
        LOG.debug("Token granted {}",token);
        return token;
    }

    @GetMapping()
    public String home(){
        return "<h1>Hello World!</h1>";
    }

    @GetMapping("/login")
    public String login(){
        return "login";
    }

    @GetMapping("/user")
    public String user(){
        return "<h1>Hello User<h2>";
    }

    @GetMapping("/admin")
    public String admin(){
        return "<h1>Hello Admin!</h1>";
    }

    @GetMapping("/users")
    public List<User> getUsers(){
        return this.userDetailsService.findAllUsers();
    }

    @GetMapping("/users/{userID}")
    public User getUser(@PathVariable String userID){
        return this.userDetailsService.getUserById(Integer.parseInt(userID));
    }

    @PostMapping("/users")
    public User addUser(@RequestBody User user){
        return this.userDetailsService.addUser(user);
    }

    @PutMapping("/users")
    public User updateUser(@RequestBody User user){
        return this.userDetailsService.updateUser(user);
    }

    @DeleteMapping("/users/{userID}")
    public String deleteUser(@PathVariable String userID){
        return this.userDetailsService.deleteUser(Integer.parseInt(userID));
    }

    @GetMapping("/characters")
    public List<PlayerCharacter> getAllCharacters(){
        return characterService.getAllCharacters();
    }

    @PostMapping
    public PlayerCharacter addCharacter(@RequestBody PlayerCharacter character){
        return characterService.addCharacter(character);
    }
}