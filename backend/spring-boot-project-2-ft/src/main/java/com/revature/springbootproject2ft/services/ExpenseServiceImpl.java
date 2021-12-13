package com.revature.springbootproject2ft.services;

import com.revature.springbootproject2ft.entities.Budget;
import com.revature.springbootproject2ft.entities.Expense;
import com.revature.springbootproject2ft.entities.User;
import com.revature.springbootproject2ft.repositories.ExpenseRepository;
import com.revature.springbootproject2ft.repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ExpenseServiceImpl implements ExpenseService{

    @Autowired
    private ExpenseRepository repository;

    @Autowired
    private UserRepository userRepository;

    @Override
    public Expense addExpense(long id, Expense expense) {
        User user = userRepository.findById(id).get();
        expense.setUser(user);
        return repository.save(expense);
    }

    @Override
    public List<Expense> getAllExpenses() {
        return repository.findAll();
    }

    @Override
    public List <Expense> getExpenseByUserId(long user_id) {
        User user = userRepository.findById(user_id).get();
            return user.getExpense();
    }

    @Override
    public void deleteExpense(long id) {
        repository.deleteById(id);
    }

    @Override
    public Expense updateExpense(long id, Expense updateExpense) {
        Expense expenseDB = repository.findById(id).get();
        expenseDB.setAmount(updateExpense.getAmount());
        expenseDB.setCategory(updateExpense.getCategory());
        expenseDB.setMemo(updateExpense.getMemo());
        return repository.save(expenseDB);
    }

//    @Override
//    public List<Expense> sumTotalExpenseCategoryByUserId(long id) {
//
//        return null;
//    }


}
