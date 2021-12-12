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

    @PostMapping("/budgets/{id}")
    public Budget saveBudget(@PathVariable("id") long id, @RequestBody Budget budget) {
        return service.addBudget(id, budget);
    }

    @GetMapping("/budgets")
    public List<Budget> getBudgets() {
        return service.getAllBudgets();
    }

    @GetMapping("/budgets/{id}")
    public Budget getBudgetById(@PathVariable("id") long id){
        return service.getBudgetById(id);
    }

    @DeleteMapping("/budgets/{id}")
    public String deleteBudget(@PathVariable("id") long id){
        service.deleteBudget(id);
        return "record deleted successfully";
    }

    @PutMapping("/budgets/{id}")
    public String updateBudget(@PathVariable("id") long id, @RequestBody Budget budget){
        service.updateBudget(id, budget);
        return "record updated successfully";
    }
}
