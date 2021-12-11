package com.example.demo.services;

import com.example.demo.entities.PendingUser;

import java.util.List;

public interface PendingUserService {
    public PendingUser addPendingUser(PendingUser pendingUser);
    public List<PendingUser> getAllPendingUsers();
    public PendingUser getPendingUserById(long id);
    public void deletePendingUser(long id);
    public PendingUser updatePendingUser(long id, PendingUser updatePendingUser);
}
