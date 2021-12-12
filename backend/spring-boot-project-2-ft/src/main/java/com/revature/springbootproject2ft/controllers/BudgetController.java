package com.revature.springbootproject2ft.controllers;

import com.revature.springbootproject2ft.entities.Budget;
import com.revature.springbootproject2ft.services.BudgetService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class BudgetController {

    @Autowired
    private BudgetService service;

    @PostMapping("/budgets/{user_id}")
    public Budget saveBudget(@PathVariable("user_id") long id, @RequestBody Budget budget) {
        return service.addBudget(id, budget);
    }

    @GetMapping("/budgets")
    public List<Budget> getBudgets() {
        return service.getAllBudgets();
    }

    @GetMapping("/budgets/{user_id}")
    public Budget getBudgetByUserId(@PathVariable("user_id") long id){
        return service.getBudgetByUserId(id);
    }

    @DeleteMapping("/budgets/{id}")
    public String deleteBudget(@PathVariable("id") long id){
        service.deleteBudget(id);
        return "record deleted successfully";
    }

    @PutMapping("/budgets/{user_id}")
    public String updateBudget(@PathVariable("user_id") long id, @RequestBody Budget budget){
        service.updateBudgetByUserId(id, budget);
        return "record updated successfully";
    }
}
