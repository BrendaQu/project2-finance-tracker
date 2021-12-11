package com.example.demo.services;

import com.example.demo.entities.Form;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public interface FormService {
    public Form addForm(Form form);
    public List<Form> getAllForms();
    public Form getFormById(long id);
    public void deleteForm(long id);
    public Form updateForm(long id, Form updateForm);
}
