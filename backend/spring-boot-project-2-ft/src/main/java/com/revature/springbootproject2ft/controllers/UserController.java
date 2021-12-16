package com.revature.springbootproject2ft.controllers;

import com.revature.springbootproject2ft.entities.User;
import com.revature.springbootproject2ft.services.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
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

    @GetMapping("users/type/{type}")
    public int getCountByType(@PathVariable("type") String type){
        return service.getCountByType(type);
    }

}
