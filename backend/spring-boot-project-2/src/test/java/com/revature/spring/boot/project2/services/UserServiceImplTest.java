package com.revature.spring.boot.project2.services;

import com.revature.spring.boot.project2.entities.User;
import com.revature.spring.boot.project2.repositories.UserRepository;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import static org.junit.jupiter.api.Assertions.*;

@SpringBootTest
class UserServiceImplTest {
    @Autowired
    private UserRepository repository;

    @Test
    public void addUser() {
        User user = User.builder()
                .firstName("Mark")
                .lastName("Smith")
                .email("m@gmail.com")
                .phone("9095555555")
                .password("password1")
                .gender("male")
                .country("USA")
                .build();

        repository.save(user);
    }
}