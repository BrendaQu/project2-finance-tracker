package com.example.demo.services;

import com.example.demo.entities.Budget;
import com.example.demo.repositories.BudgetRepository;
import org.springframework.beans.factory.annotation.Autowired;

import java.util.List;
import java.util.Optional;

public class BudgetServiceImpl implements BudgetService{

    @Autowired
    private BudgetRepository repository;

    @Override
    public Budget addBudget(Budget budget) {
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
