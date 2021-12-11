package com.example.demo.controllers;

import com.example.demo.entities.Form;
import com.example.demo.services.FormService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "*")
public class FormController {

    @Autowired
    private FormService service;

    @PostMapping("/forms")
    public Form saveForm(@RequestBody Form form) {
        return service.addForm(form);
    }

    @GetMapping("/forms")
    public List<Form> getForms() {
        return service.getAllForms();
    }

    @GetMapping("/forms/{id}")
    public Form getFormById(@PathVariable("id") long id){
        return service.getFormById(id);
    }

    @DeleteMapping("/forms/{id}")
    public String deleteForm(@PathVariable("id") long id){
        service.deleteForm(id);
        return "record deleted successfully";
    }

    @PutMapping("/forms/{id}")
    public String updateForm(@PathVariable("id") long id, @RequestBody Form form){
        service.updateForm(id, form);
        return "record updated successfully";
    }
}
