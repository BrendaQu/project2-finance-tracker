package com.revature.springbootproject2ft.services;

import com.revature.springbootproject2ft.entities.Budget;
import com.revature.springbootproject2ft.entities.User;
import com.revature.springbootproject2ft.repositories.BudgetRepository;
import com.revature.springbootproject2ft.repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

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
    public Budget getBudgetByUserId(long user_id) {
        User user = userRepository.findById(user_id).get();

        if(user.getBudget().isEmpty()){
            return null;
        } else {
            return (Budget) user.getBudget().get(0);
        }
    }

    @Override
    public void deleteBudget(long id) {
        repository.deleteById(id);
    }

    @Override
    public Budget updateBudgetByUserId(long user_id, Budget updateBudget) {
        User user = userRepository.findById(user_id).get();
        long budget_id = user.getBudget().get(0).getBudgetId();
        Budget budgetDB = repository.findById(budget_id).get();
        budgetDB.setRent(updateBudget.getRent());
        budgetDB.setUtilities(updateBudget.getUtilities());
        budgetDB.setGroceries(updateBudget.getGroceries());
        budgetDB.setSubscriptions(updateBudget.getSubscriptions());
        budgetDB.setEntertainment(updateBudget.getEntertainment());
        budgetDB.setDining(updateBudget.getDining());
        budgetDB.setShopping(updateBudget.getShopping());
        budgetDB.setMisc(updateBudget.getMisc());

        return repository.save(budgetDB);
    }
}
