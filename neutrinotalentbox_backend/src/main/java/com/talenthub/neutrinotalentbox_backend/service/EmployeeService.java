package com.talenthub.neutrinotalentbox_backend.service;

import com.talenthub.neutrinotalentbox_backend.entity.Employee;
import org.springframework.stereotype.Service;

public interface EmployeeService {
    Employee saveEmployee(Employee employee);
    boolean sendOtpToEmail(String email);
    boolean verifyOtp(String email, String otp);
    boolean logout(String email);
}
