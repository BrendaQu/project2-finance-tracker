package com.revature.spring.boot.project2.repositories;

import com.revature.spring.boot.project2.entities.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepository extends JpaRepository<User, Long> {
}
