package com.revature.springbootproject2ft.repositories;

import com.revature.springbootproject2ft.entities.Expense;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ExpenseRepository extends JpaRepository<Expense, Long> {
//    @Query(value = "SELECT user_id,category, SUM(amount) FROM tbl_expenses WHERE MONTH(date) = MONTH(CURRENT_DATE()) AND YEAR(date) = YEAR(CURRENT_DATE()) GROUP BY category, user_id")
//    Expense sumTotalExpenseCategoryByUserId(String user_id);

}
