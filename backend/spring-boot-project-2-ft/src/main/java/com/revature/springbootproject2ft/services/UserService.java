package com.revature.springbootproject2ft.services;

import com.revature.springbootproject2ft.entities.User;

import java.util.List;

public interface UserService {
    public User addUser(User user);
    public List<User> getAllUsers();
    public User getUserById(long id);
    public void deleteUser(long id);
    public User updateUser(long id, User updateUser);
    public int getCountByType(String type);
}
