package com.revature.spring.boot.project2.entities;


import lombok.*;

import javax.persistence.*;
import java.math.BigDecimal;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
@ToString
@Table(name = "tbl_form")

public class Form {

    @Id
    @SequenceGenerator(
            name= "form_sequence",
            sequenceName = "form_sequence",
            allocationSize = 1
    )
    @GeneratedValue(
            strategy = GenerationType.SEQUENCE,
            generator = "form_sequence"
    )
    private Long formID;
    private String date;
    private BigDecimal amount;
    private String category;
    private String memo;
}
