package com.revature.springbootproject2ft.entities;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.math.BigDecimal;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
@Table(name = "tbl_budgets")
public class Budget {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long budgetId;
    @ManyToOne
    @JoinColumn(name="userId", nullable = false)
    private User user;
    private BigDecimal rent;
    private BigDecimal utilities;
    private BigDecimal groceries;
    private BigDecimal subscriptions;
    private BigDecimal dining;
    private BigDecimal entertainment;
    private BigDecimal shopping;
    private BigDecimal misc;

    public Long getBudgetId() {
        return budgetId;
    }

    public void setBudgetId(Long budgetId) {
        this.budgetId = budgetId;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }

    public BigDecimal getRent() {
        return rent;
    }

    public void setRent(BigDecimal rent) {
        this.rent = rent;
    }

    public BigDecimal getUtilities() {
        return utilities;
    }

    public void setUtilities(BigDecimal utilities) {
        this.utilities = utilities;
    }

    public BigDecimal getGroceries() {
        return groceries;
    }

    public void setGroceries(BigDecimal groceries) {
        this.groceries = groceries;
    }

    public BigDecimal getSubscriptions() {
        return subscriptions;
    }

    public void setSubscriptions(BigDecimal subscriptions) {
        this.subscriptions = subscriptions;
    }

    public BigDecimal getDining() {
        return dining;
    }

    public void setDining(BigDecimal dining) {
        this.dining = dining;
    }

    public BigDecimal getEntertainment() {
        return entertainment;
    }

    public void setEntertainment(BigDecimal entertainment) {
        this.entertainment = entertainment;
    }

    public BigDecimal getShopping() {
        return shopping;
    }

    public void setShopping(BigDecimal shopping) {
        this.shopping = shopping;
    }

    public BigDecimal getMisc() {
        return misc;
    }

    public void setMisc(BigDecimal misc) {
        this.misc = misc;
    }
}
