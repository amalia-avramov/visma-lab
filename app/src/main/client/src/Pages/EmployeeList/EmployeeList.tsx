import {Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow} from "@mui/material";
import {Employee} from "../EmployeeForm/EmployeeForm.types";

export type EmployeeListProps = {
    employees: Employee[]
}

function EmployeeRow(props: {employee: Employee}){
    return(
    <TableRow>
        <TableCell>{props.employee.firstName}</TableCell>
        <TableCell>{props.employee.lastName}</TableCell>
        <TableCell>{props.employee.salary}</TableCell>
    </TableRow>
    );
}
export function EmployeeList(props: EmployeeListProps){
    return  (
        <TableContainer component={Paper}>
        <Table>
            <TableHead>
                <TableRow>
                    <TableCell>First name</TableCell>
                    <TableCell>Last name</TableCell>
                    <TableCell>Salary</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>{
                props.employees.map((employee) => <EmployeeRow employee={employee}/>)}
            </TableBody>
        </Table>
    </TableContainer>
    );
}