package com.example.demo.services;

import com.example.demo.entities.Form;
import com.example.demo.repositories.FormRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class FormServiceImpl implements FormService{

    @Autowired
    private FormRepository repository;

    @Override
    public Form addForm(Form form) {
        return repository.save(form);
    }

    @Override
    public List<Form> getAllForms() {
        return repository.findAll();
    }

    @Override
    public Form getFormById(long id) {
        Optional<Form> form = repository.findById(id);
        return form.get();
    }

    @Override
    public void deleteForm(long id) {
        repository.deleteById(id);
    }

    @Override
    public Form updateForm(long id, Form updateForm) {
        Form formDB = repository.findById(id).get();
        formDB.setAmount(updateForm.getAmount());
        formDB.setCategory(updateForm.getCategory());
        formDB.setMemo(updateForm.getMemo());
        return repository.save(formDB);
    }
}
