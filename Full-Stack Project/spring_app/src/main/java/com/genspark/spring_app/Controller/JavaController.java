package com.genspark.spring_app.Controller;
import com.genspark.spring_app.Entity.PlayerCharacter;
import com.genspark.spring_app.Entity.User;
import com.genspark.spring_app.Service.CharacterService;
import com.genspark.spring_app.Service.MyUserDetailsService;
import com.genspark.spring_app.Service.TokenService;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.configurationprocessor.json.JSONException;
import org.springframework.boot.configurationprocessor.json.JSONObject;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.*;

import java.lang.annotation.ElementType;
import java.util.List;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
public class JavaController {
    @Autowired
    MyUserDetailsService userDetailsService;

    @Autowired
    CharacterService characterService;

    @Autowired
    TokenService tokenService;


    @PostMapping("/token")
    public List<String> token(Authentication authentication) throws JSONException {
//        JSONObject token = new JSONObject();
//        token.put("Authorization","Bearer "+ tokenService.generateToken(authentication));
        return List.of(tokenService.generateToken(authentication));
    }

    @GetMapping()
    public String home(){
        return "<h1>Hello World!</h1>";
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

    @GetMapping("/characters/{id}")
    public PlayerCharacter getCharacterById(@PathVariable String id){
        return characterService.getCharacterById(Integer.parseInt(id));
    }

    @PostMapping("/characters")
    public PlayerCharacter addCharacter(@RequestBody PlayerCharacter character){
        return characterService.addCharacter(character);
    }
}