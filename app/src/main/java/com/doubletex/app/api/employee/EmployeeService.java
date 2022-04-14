package com.doubletex.app.api.employee;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
@RequiredArgsConstructor
public class EmployeeService {
    private final EmployeeRepository employeeRepository;
    public Optional<Employee> get(Long id){
        return employeeRepository.findById(id);
    }

    public void post(Employee employee){
        employeeRepository.save(employee);
    }
}
