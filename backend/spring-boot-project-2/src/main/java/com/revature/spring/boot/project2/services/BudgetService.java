package com.revature.spring.boot.project2.services;

import com.revature.spring.boot.project2.entities.Budget;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public interface BudgetService {
    public Budget addBudget(Budget budget);
    public List<Budget> getAllBudgets();
    public Budget getBudgetById(long id);
    public void deleteBudget(long id);
    public Budget updateBudget(long id, Budget updateBudget);
}
