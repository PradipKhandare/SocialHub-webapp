package com.talenthub.neutrinotalentbox_backend.entity;

import jakarta.persistence.*;

@Entity
@Table(name = "Employee_List")
public class Employee {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String name;
    private String employeeID;
    private String email;
    private String gender;
    private String department;

    public Employee() {
    }

    public Employee(Long id, String name, String employeeID, String email, String gender, String department) {
        this.id = id;
        this.name = name;
        this.employeeID = employeeID;
        this.email = email;
        this.gender = gender;
        this.department = department;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getEmployeeID() {
        return employeeID;
    }

    public void setEmployeeID(String employeeID) {
        this.employeeID = employeeID;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getGender() {
        return gender;
    }

    public void setGender(String gender) {
        this.gender = gender;
    }

    public String getDepartment() {
        return department;
    }

    public void setDepartment(String department) {
        this.department = department;
    }
}
