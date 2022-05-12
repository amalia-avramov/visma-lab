import {EmployeeFormProps} from "./EmployeeForm";
import {useEffect, useState} from "react";
import {blankEmployee, Employee, EmployeeError} from "./EmployeeForm.types";

function validateName(name: string): string|undefined{
    if(name.length==0){
        return "Cannot be blank"
    }
    if(name.includes("+")){
        return "Cannot contain Plus"
    }
    if(name.match("[0-9]")){
        return "Cannot contain digits"
    }
}

function validateEmployee(employee: Employee): EmployeeError{
    const error: EmployeeError = {}
    const {firstName, lastName} = employee;
    if(firstName?.length === 0)
        error.firstName = 'First name cannot be empty'
    if(lastName?.length === 0)
        error.lastName = 'Last name cannot be empty'
    return error
}
export function useEmployeeForm(): EmployeeFormProps{
    const [employee, setEmployee]=useState<Employee>(blankEmployee)
    const [error,setError]=useState<EmployeeError>({} as EmployeeError)

    useEffect(()=>{
        const newError = validateEmployee(employee)
        setError(newError)
    }, [employee])

    function submit(){
        if(Object.keys(error).length==0) {
            window.fetch("/api/employee", {
                method: "POST",
                body: JSON.stringify(employee),
                headers:{
                    'Content-type':'application/json'
                }
            }).then(r => r.json()).then(r => console.log(r))
        }
    }
    return {
        employee,
        setEmployee,
        error,
        submit
    }
}