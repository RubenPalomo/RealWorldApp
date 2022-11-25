package com.devn8.app.controllers;

import com.devn8.app.models.User;
import com.devn8.app.repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class UserController {
    private final UserRepository userRepository;

    @Autowired
    public UserController(UserRepository userRepository){
        this.userRepository=userRepository;
    }

    @GetMapping("/users")
    public List<User> getUsers(){
        return userRepository.findAll();
    }

    @GetMapping("/user/{id}")
    public User findbyId(@PathVariable String id){ return userRepository.findById(id).get();}

    @PostMapping("/users")
    public void save(@RequestBody User user){userRepository.save(user);}

    @PutMapping("/user")
    public void update(@RequestBody User user){ userRepository.save(user);}

    @DeleteMapping("/user/{id}")
    public void deleteById(@PathVariable String id){ userRepository.deleteById(id);}
}
