import { Component, OnInit } from '@angular/core';

import { IEmployee } from './employee.interface';
import { EmployeeService } from './employee.service';

@Component({
    templateUrl: './employeeList.component.html'
})

export class EmployeeListComponent implements OnInit{

    private employees:IEmployee[];
    private status:string = 'Fetching employee...';

    constructor(private _empployeeList: EmployeeService){

    }

    ngOnInit(){
        this._empployeeList.getEmployeeList().subscribe(
            (ressponse:IEmployee[]) => {
                this.employees = ressponse
            },
            error => {
                console.log(error);
                this.status = 'No employee found';
            }
        );
    }

}