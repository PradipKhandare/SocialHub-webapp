package com.talenthub.neutrinotalentbox_backend.reposotory;

import com.talenthub.neutrinotalentbox_backend.entity.Employee;
import jakarta.persistence.Id;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;


public interface EmployeeRepository extends JpaRepository<Employee, Long> {
}
