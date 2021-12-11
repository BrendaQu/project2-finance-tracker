package com.revature.springbootproject2ft.entities;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
@Table(name = "tbl_users")
public class User {
    @Id
    @GeneratedValue(strategy =  GenerationType.AUTO)
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
