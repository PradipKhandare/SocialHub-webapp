package com.talenthub.neutrinotalentbox_backend.service;

import com.talenthub.neutrinotalentbox_backend.entity.Employee;
import org.springframework.stereotype.Service;

public interface EmployeeService {
    Employee saveEmployee(Employee employee);
}
