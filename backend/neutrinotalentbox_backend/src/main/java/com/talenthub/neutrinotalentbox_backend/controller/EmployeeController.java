package com.talenthub.neutrinotalentbox_backend.controller;


import com.talenthub.neutrinotalentbox_backend.entity.Employee;
import com.talenthub.neutrinotalentbox_backend.service.EmployeeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@CrossOrigin(origins = {"http://localhost:4200", "http://localhost:9876"})
@RestController
@RequestMapping("/employees")
public class EmployeeController {

    @Autowired
    private EmployeeService employeeService;

    @PostMapping("/signup")
    public Employee createEmployee(@RequestBody Employee employee) {
        return employeeService.saveEmployee(employee);
    }

    @PostMapping("/sendotp")
    public String login(@RequestParam String email) {
        boolean otpSent = employeeService.sendOtpToEmail(email);

        if (otpSent) {
            return "OTP sent to your email.";
        } else {
            return "Email not found.";
        }
    }
}
