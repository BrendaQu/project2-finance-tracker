package com.example.demo.controllers;

import com.example.demo.entities.User;
import com.example.demo.services.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "*")
public class UserController {

    @Autowired
    private UserService service;

    @PostMapping("/users")
    public User saveUser(@RequestBody User user) {
        return service.addUser(user);
    }

    @GetMapping("/users")
    public List<User> getUsers() {
        return service.getAllUsers();
    }

    @GetMapping("/users/{id}")
    public User getUserById(@PathVariable("id") long id){
        return service.getUserById(id);
    }

    @DeleteMapping("/users/{id}")
    public String deleteUser(@PathVariable("id") long id){
        service.deleteUser(id);
        return "record deleted successfully";
    }

    @PutMapping("/users/{id}")
    public String updateUser(@PathVariable("id") long id, @RequestBody User user){
        service.updateUser(id, user);
        return "record updated successfully";
    }
}
