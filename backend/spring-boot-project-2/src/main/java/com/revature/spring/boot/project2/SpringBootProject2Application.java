package com.revature.spring.boot.project2;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication(scanBasePackages = {"com.example.demo.controllers.BudgetController"})
public class SpringBootProject2Application {

	public static void main(String[] args) {
		SpringApplication.run(SpringBootProject2Application.class, args);
	}

}
