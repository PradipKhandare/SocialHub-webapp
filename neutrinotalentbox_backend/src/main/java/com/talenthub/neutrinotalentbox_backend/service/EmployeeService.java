package com.talenthub.neutrinotalentbox_backend.service;

import com.talenthub.neutrinotalentbox_backend.entity.Employee;

import java.util.Map;

public interface EmployeeService {
    Employee saveEmployee(Employee employee);
    boolean sendOtpToEmail(String email);
    Map<String, Object> verifyOtp(String email, String otp);
    boolean logout(String email);
}
