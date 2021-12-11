package com.revature.spring.boot.project2.entities;
import lombok.*;

import javax.persistence.*;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
@ToString
@Table(name = "tbl_user")

public class User {

    @Id
    @SequenceGenerator(
            name = "user_sequence",
            sequenceName = "user_sequence",
            allocationSize = 1
    )
    @GeneratedValue(
            strategy = GenerationType.SEQUENCE,
            generator = "user_sequence"
    )
    private Long userId;
    private String firstName;
    private String lastName;
    private String email;
    private String phone;
    private String password;
    private String gender;
    private String country;
    private String type;
}
