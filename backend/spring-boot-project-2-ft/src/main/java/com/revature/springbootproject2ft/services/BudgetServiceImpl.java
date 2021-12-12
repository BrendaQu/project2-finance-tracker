package com.revature.springbootproject2ft.services;

import com.revature.springbootproject2ft.entities.Budget;
import com.revature.springbootproject2ft.entities.User;
import com.revature.springbootproject2ft.repositories.BudgetRepository;
import com.revature.springbootproject2ft.repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class BudgetServiceImpl implements BudgetService{

    @Autowired
    private BudgetRepository repository;
    @Autowired
    private UserRepository userRepository;

    @Override
    public Budget addBudget(long id, Budget budget) {
       User user = userRepository.findById(id).get();
        budget.setUser(user);
        return repository.save(budget);
    }

    @Override
    public List<Budget> getAllBudgets() {
        return repository.findAll();
    }

    @Override
    public Budget getBudgetById(long id) {
        Optional<Budget> budget = repository.findById(id);
        return budget.get();
    }

    @Override
    public void deleteBudget(long id) {
        repository.deleteById(id);
    }

    @Override
    public Budget updateBudget(long id, Budget updateBudget) {
        Budget budgetDB = repository.findById(id).get();
        budgetDB.setRent(updateBudget.getRent());
        budgetDB.setUtilities(updateBudget.getUtilities());
        budgetDB.setGroceries(updateBudget.getGroceries());
        budgetDB.setSubscriptions(updateBudget.getSubscriptions());
        budgetDB.setEntertainment(updateBudget.getEntertainment());
        budgetDB.setDining(updateBudget.getDining());
        budgetDB.setDining(updateBudget.getShopping());
        budgetDB.setMisc(updateBudget.getMisc());
        return budgetDB;
    }
}
