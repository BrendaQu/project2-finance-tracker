package com.example.demo.repositories;

import com.example.demo.entities.PendingUser;
import org.springframework.data.jpa.repository.JpaRepository;

public interface PendingUserRepository extends JpaRepository<PendingUser, Long> {
}
