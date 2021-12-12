package com.revature.springbootproject2ft.controllers;

import com.revature.springbootproject2ft.entities.Budget;
import com.revature.springbootproject2ft.entities.Expense;
import com.revature.springbootproject2ft.services.ExpenseService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class ExpenseController {

    @Autowired
    private ExpenseService service;

    @PostMapping("/expenses/{id}")
    public Expense saveExpense(@PathVariable("id") long id, @RequestBody Expense expense){
        return service.addExpense(id, expense);
    }

    @GetMapping("/expenses")
    public List<Expense> getExpenses(){
        return service.getAllExpenses();
    }

    @GetMapping("/expenses/{id}")
    public Expense getExpenseById(@PathVariable("id") long id){
        return service.getExpenseById(id);
    }

    @DeleteMapping("/expenses/{id}")
    public String deleteExpense(@PathVariable("id") long id){
        service.deleteExpense(id);
        return "record deleted successfully";
    }

    @PutMapping("/expenses/{id}")
    public String updateExpense(@PathVariable("id") long id, @RequestBody Expense expense){
        service.updateExpense(id, expense);
        return "record updated successfully";
    }
}
