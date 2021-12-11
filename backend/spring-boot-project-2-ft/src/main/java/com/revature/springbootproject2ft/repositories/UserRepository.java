package com.revature.springbootproject2ft.repositories;

import com.revature.springbootproject2ft.entities.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepository extends JpaRepository<User, Long> {
}
