package com.example.demo.entities;

import lombok.*;

import javax.persistence.*;
import java.math.BigDecimal;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
@ToString
@Table(name = "tbl_budget")
public class Budget {
    @Id
    @SequenceGenerator(
            name = "budget_sequence",
            sequenceName = "budget_sequence",
            allocationSize = 1
    )
    @GeneratedValue(
            strategy = GenerationType.SEQUENCE,
            generator = "budget_sequence"
    )
    private Long budgetId;
    private BigDecimal rent;
    private BigDecimal utilities;
    private BigDecimal groceries;
    private BigDecimal subscriptions;
    private BigDecimal dining;
    private BigDecimal entertainment;
    private BigDecimal shopping;
    private BigDecimal misc;

}
