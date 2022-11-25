package com.devn8.app.service;

import com.devn8.app.models.User;
import com.devn8.app.repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;

import java.util.List;
import java.util.Optional;

public class UserService {
    @Autowired
    UserRepository userRepository;
    public void save (User user){ userRepository.save(user);}

    public List<User> findAll(){ return userRepository.findAll();}

    public Optional<User> findById(String id){ return userRepository.findById(id);}

    public void deleteById(String id){ userRepository.deleteById(id);}
}
