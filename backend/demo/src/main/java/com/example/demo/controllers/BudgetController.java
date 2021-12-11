package com.example.demo.controllers;

import com.example.demo.entities.Budget;
import com.example.demo.services.BudgetService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "*")
public class BudgetController {
    
    @Autowired
    private BudgetService service;

    @PostMapping("/budgets")
    public Budget saveBudget(@RequestBody Budget budget) {
        return service.addBudget(budget);
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
