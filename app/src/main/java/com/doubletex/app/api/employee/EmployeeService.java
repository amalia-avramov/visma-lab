package com.doubletex.app.api.employee;

import com.doubletex.app.errors.DbtNotFound;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
@RequiredArgsConstructor
public class EmployeeService {
    private final EmployeeRepository employeeRepository;
    public Optional<Employee> get(Long id){
        return Optional.ofNullable(employeeRepository.findById(id).orElseThrow(() -> new DbtNotFound(Employee.class, id)));
    }

    public void post(Employee employee){
        employeeRepository.save(employee);
    }
}
