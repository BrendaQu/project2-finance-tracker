package com.revature.spring.boot.project2.repositories;

import com.revature.spring.boot.project2.entities.PendingUser;
import org.springframework.data.jpa.repository.JpaRepository;

public interface PendingUserRepository extends JpaRepository<PendingUser, Long> {
}
