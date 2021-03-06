package com.revature.springbootproject2ft.controllers;

import com.revature.springbootproject2ft.entities.PendingUser;
import com.revature.springbootproject2ft.services.PendingUserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class PendingUserController {
    @Autowired
    private PendingUserService service;

    @PostMapping("/pendingUsers")
    public PendingUser savePendingUser(@RequestBody PendingUser pendingPendingUser) {
        return service.addPendingUser(pendingPendingUser);
    }

    @GetMapping("/pendingUsers")
    public List<PendingUser> getPendingUsers() {
        return service.getAllPendingUsers();
    }

    @GetMapping("/pendingUsers/{id}")
    public PendingUser getPendingUserById(@PathVariable("id") long id){
        return service.getPendingUserById(id);
    }

    @DeleteMapping("/pendingUsers/{id}")
    public String deletePendingUser(@PathVariable("id") long id){
        service.deletePendingUser(id);
        return "record deleted successfully";
    }

    @PutMapping("/pendingUsers/{id}")
    public String updatePendingUser(@PathVariable("id") long id, @RequestBody PendingUser pendingPendingUser){
        service.updatePendingUser(id, pendingPendingUser);
        return "record updated successfully";
    }
}
