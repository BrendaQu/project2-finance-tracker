package com.revature.spring.boot.project2.services;

import com.revature.spring.boot.project2.entities.Form;
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
