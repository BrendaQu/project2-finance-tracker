package com.revature.spring.boot.project2.services;

import com.revature.spring.boot.project2.entities.User;
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
