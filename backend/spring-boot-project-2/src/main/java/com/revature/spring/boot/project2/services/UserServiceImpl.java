package com.revature.spring.boot.project2.services;

import com.revature.spring.boot.project2.entities.User;
import com.revature.spring.boot.project2.repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class UserServiceImpl implements UserService {

    private UserRepository repository;

    @Override
    public User addUser(User user) {
        return repository.save(user);
    }

    @Override
    public List<User> getAllUsers() {
        return repository.findAll();
    }

    @Override
    public User getUserById(long id) {
        Optional<User> user = repository.findById(id);
        return user.get();
    }

    @Override
    public void deleteUser(long id) {
        repository.deleteById(id);
    }

    @Override
    public User updateUser(long id, User updateUser) {
        User userDB = repository.findById(id).get();
        userDB.setFirstName(updateUser.getFirstName());
        userDB.setLastName(updateUser.getLastName());
        userDB.setEmail(updateUser.getEmail());
        userDB.setPhone(updateUser.getPhone());
        userDB.setPassword(updateUser.getPassword());
        userDB.setGender(updateUser.getGender());
        userDB.setCountry(updateUser.getCountry());
        return repository.save(userDB);
    }
}
