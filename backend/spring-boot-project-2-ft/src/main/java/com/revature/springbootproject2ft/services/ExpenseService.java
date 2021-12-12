package com.revature.springbootproject2ft.services;

import com.revature.springbootproject2ft.entities.Expense;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public interface ExpenseService {
    public Expense addExpense(long id, Expense expense);
    public List<Expense> getAllExpenses();
    public Expense getExpenseById(long id);
    public void deleteExpense(long id);
    public Expense updateExpense(long id, Expense updateExpense);
}
