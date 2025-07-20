package com.example.accountservice.controller;

import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/account")
public class AccountController {

    @GetMapping("/details")
    public String getAccountDetails() {
        return "Account Details from Account Microservice";
    }
}
