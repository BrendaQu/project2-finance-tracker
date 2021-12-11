package com.revature.spring.boot.project2.services;

import com.revature.spring.boot.project2.entities.PendingUser;
import com.revature.spring.boot.project2.repositories.PendingUserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class PendingUserServiceImpl implements PendingUserService{

    @Autowired
    private PendingUserRepository repository;

    @Override
    public PendingUser addPendingUser(PendingUser pendingUser) {
        return repository.save(pendingUser);
    }

    @Override
    public List<PendingUser> getAllPendingUsers() {
        return repository.findAll();
    }

    @Override
    public PendingUser getPendingUserById(long id) {
        Optional<PendingUser> pendingUser = repository.findById(id);
        return pendingUser.get();
    }

    @Override
    public void deletePendingUser(long id) {
        repository.deleteById(id);
    }

    @Override
    public PendingUser updatePendingUser(long id, PendingUser updatePendingUser) {
        PendingUser pendingUserDB = repository.findById(id).get();
        pendingUserDB.setFirstName(updatePendingUser.getFirstName());
        pendingUserDB.setLastName(updatePendingUser.getLastName());
        pendingUserDB.setEmail(updatePendingUser.getEmail());
        pendingUserDB.setPhone(updatePendingUser.getPhone());
        pendingUserDB.setPassword(updatePendingUser.getPassword());
        pendingUserDB.setGender(updatePendingUser.getGender());
        pendingUserDB.setCountry(updatePendingUser.getCountry());
        return repository.save(pendingUserDB);
    }
}
