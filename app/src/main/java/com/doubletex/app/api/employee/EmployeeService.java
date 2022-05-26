package com.doubletex.app.api.employee;

import com.doubletex.app.errors.DbtBadRequest;
import com.doubletex.app.errors.DbtNotFound;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
@RequiredArgsConstructor
public class EmployeeService {
    private final EmployeeRepository employeeRepository;
    public Employee get(Long id){
        return employeeRepository.findById(id).orElseThrow(() -> new DbtNotFound(Employee.class, id));
    }

    public void post(Employee employee){
        employeeRepository.save(employee);
    }

    /*public Employee raiseSalary(Long id, Double newSalary) {
        DbtBadRequest dbtBadRequest = DbtBadRequest.current();
        Employee employee = employeeRepository.findById(id).orElseThrow(() -> new DbtNotFound(Employee.class, id));
        if(employee.getSalary() > newSalary){
            dbtBadRequest.addValidation("salary", "It's not a raise!");
        }
        employee.setSalary(newSalary);
        return employeeRepository.save(employee);
    }*/

    public Employee raiseSalary(Long id, Double newSalary) {
        Employee employee = employeeRepository.findById(id).orElseThrow(() -> new DbtNotFound(Employee.class, id));
        validateSalaryRaise(employee, newSalary);
        DbtBadRequest.current().throwIfNecessary();
        employee.setSalary(newSalary);
        return employeeRepository.save(employee);
    }

    public void validateSalaryRaise(Employee employee, Double newSalary) {
        DbtBadRequest dbtBadRequest = DbtBadRequest.current();
        if(employee.getSalary() > newSalary) {
            dbtBadRequest.addValidation("salary", "New salary should be greater then the old one");
        }
    }

}
