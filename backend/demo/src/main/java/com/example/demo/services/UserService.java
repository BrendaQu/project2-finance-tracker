package com.example.demo.services;

import com.example.demo.entities.User;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public interface UserService {
    public User addUser(User user);
    public List<User> getAllUsers();
    public User getUserById(long id);
    public void deleteUser(long id);
    public User updateUser(long id, User updateUser);
}
