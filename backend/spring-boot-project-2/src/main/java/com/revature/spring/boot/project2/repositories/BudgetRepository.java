package com.revature.spring.boot.project2.repositories;

import com.revature.spring.boot.project2.entities.Budget;
import org.springframework.data.jpa.repository.JpaRepository;

public interface BudgetRepository extends JpaRepository<Budget, Long> {
}
