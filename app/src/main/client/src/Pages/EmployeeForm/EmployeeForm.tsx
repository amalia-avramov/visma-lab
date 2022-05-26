import {TextField,Button} from "@mui/material";
import {useState} from "react";
import {blankEmployee, Employee, EmployeeError} from "./EmployeeForm.types";
import './EmployeeForm.css'

export type EmployeeFormProps = {
    employee: Employee,
    setEmployee: (employee: Employee) => void,
    error: EmployeeError
    submit: ()=>void
}

export function EmployeeForm(props: EmployeeFormProps){


    return (
        <form autoComplete={'off'} className={"employee-form__form"}>
            <h2>Employee</h2>
            <TextField value={props.employee.firstName}
                       label={"First name"}
                       onChange={(e)=>{
                            const newEmployee: Employee={...props.employee, firstName: e.target.value}
                            props.setEmployee(newEmployee)
            }}
                       error={props.error.firstName!==undefined}
                       helperText={props.error.firstName}
            />

            <TextField value={props.employee.lastName}
                       label={"Last name"}
                       onChange={(e)=>{
                            const newEmployee: Employee={...props.employee, lastName: e.target.value}
                            props.setEmployee(newEmployee)
            }}
                       error={props.error.lastName!==undefined}
                       helperText={props.error.lastName}
            />
            <TextField value={props.employee.salary}
                       label={"Salary"}
                       type="number"
                       onChange={(e)=>{
                           const newEmployee: Employee={...props.employee, salary: +e.target.value}
                           props.setEmployee(newEmployee)
                       }}
                       error={props.error.salary!==undefined}
                       helperText={props.error.salary}
            />
            <Button variant={"contained"} onClick={(e)=>{
                props.submit()
            }}>
                Submit
            </Button>
            </form>
    )
}