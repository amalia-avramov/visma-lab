package com.doubletex.app.api.employee;

import com.doubletex.app.errors.DbtNotFound;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.Optional;

@RestController
@RequestMapping("/api/employee")
@RequiredArgsConstructor
public class EmployeeAPI {
    private final EmployeeService employeeService;

    @GetMapping("/{id}")
    public Optional<Employee> get (@PathVariable Long id){
        return employeeService.get(id) ;
    }

    @PostMapping("")
    public void post(@Valid @RequestBody Employee employee){
        employeeService.post(employee);
    }
}
