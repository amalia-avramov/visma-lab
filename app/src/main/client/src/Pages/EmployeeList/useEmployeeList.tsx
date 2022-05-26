import {EmployeeListProps} from "./EmployeeList";
import {Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow} from "@mui/material";

export function  useEmployeeList(): EmployeeListProps{
    return {
        employees: [
            {
                id: 0,
                firstName:"a",
                lastName: "b",
                salary: 4000
            },
            {
                id: 0,
                firstName:"a",
                lastName: "b",
                salary: 4000
            }
        ]
    };
}