package com.revature.springbootproject2ft.services;

import com.revature.springbootproject2ft.entities.PendingUser;

import java.util.List;

public interface PendingUserService {
    public PendingUser addPendingUser(PendingUser pendingUser);
    public List<PendingUser> getAllPendingUsers();
    public PendingUser getPendingUserById(long id);
    public void deletePendingUser(long id);
    public PendingUser updatePendingUser(long id, PendingUser updatePendingUser);
}
