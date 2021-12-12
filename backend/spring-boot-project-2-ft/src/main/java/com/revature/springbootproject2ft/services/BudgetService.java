package com.revature.springbootproject2ft.services;

import com.revature.springbootproject2ft.entities.Budget;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public interface BudgetService {
    public Budget addBudget(long id, Budget budget);
    public List<Budget> getAllBudgets();
    public Budget getBudgetById(long id);
    public void deleteBudget(long id);
    public Budget updateBudget(long id, Budget updateBudget);
}
