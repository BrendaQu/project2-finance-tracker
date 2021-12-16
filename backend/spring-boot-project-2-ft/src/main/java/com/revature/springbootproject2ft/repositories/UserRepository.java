package com.revature.springbootproject2ft.repositories;

import com.revature.springbootproject2ft.entities.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepository extends JpaRepository<User, Long> {

    @Query(
            value = "select count(type) from tbl_users where type = ?1",
            nativeQuery = true)
    int getCountByType(String type);
}
