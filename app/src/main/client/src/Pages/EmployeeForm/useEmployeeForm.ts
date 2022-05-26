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

    const params = new URLSearchParams(window.location.search);
    useEffect(()=>{
        const newError = validateEmployee(employee)
        setError(newError)
    }, [employee])

    const id=params.get("id");

    useEffect(()=>{
        load();
    },[])

    function submit(){
        if(employee.id == null){
            create();
        }
        else{
            update();
        }
    }

    async function load(){
        if(id!=null){
            const receivedEmployee= await window.fetch("/api/employee/" + id, {
                method: "GET",
                headers: {
                    'Content-Type': 'application/json'
                }
            }).then(r => r.json());
            setEmployee(receivedEmployee);
        }
    }
    function create(){
        console.log(Object.keys(error).length)
        if(Object.keys(error).length == 0) {
            window.fetch("/api/employee", {
                method: "POST",
                body: JSON.stringify(employee),
                headers: {
                    'Content-Type': 'application/json'
                }
            }).then(r => r.json()).then(r => console.log(r))
        }
    }

    function update(){
        if(Object.keys(error).length == 0) {
            window.fetch("/api/employee", {
                method: "PUT",
                body: JSON.stringify(employee),
                headers: {
                    'Content-Type': 'application/json'
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