package com.revature.springbootproject2ft.repositories;

import com.revature.springbootproject2ft.entities.PendingUser;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface PendingUserRepository extends JpaRepository<PendingUser, Long> {
}
