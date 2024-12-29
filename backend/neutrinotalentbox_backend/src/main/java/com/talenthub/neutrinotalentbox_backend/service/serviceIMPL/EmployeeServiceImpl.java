package com.talenthub.neutrinotalentbox_backend.service.serviceIMPL;

import com.talenthub.neutrinotalentbox_backend.entity.Employee;
import com.talenthub.neutrinotalentbox_backend.reposotory.EmployeeRepository;
import com.talenthub.neutrinotalentbox_backend.service.EmployeeService;
import lombok.AllArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
@AllArgsConstructor
public class EmployeeServiceImpl implements EmployeeService {

    @Autowired
    private EmployeeRepository employeeRepository;

    @Override
    public Employee saveEmployee(Employee employee) {
        return employeeRepository.save(employee);
    }
}
