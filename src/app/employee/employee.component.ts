import { Component, OnInit} from '@angular/core';

import { ActivatedRoute } from '@angular/router';

import { IEmployee } from '../employeeList/employee.interface';
import { EmployeeService } from '../employeeList/employee.service';

@Component({
    templateUrl: './employee.component.html'
})

export class EmployeeComponent implements OnInit{

    private employee:IEmployee;
    private status:string = 'Fetching employee...';

    constructor(private _employee:EmployeeService, private _routeParams: ActivatedRoute){

    }

    ngOnInit(){
        let employeeId;
        this._routeParams.params.subscribe(params=>{
            employeeId = params['id'];
        });
        this._employee.getEmployeeById(employeeId).subscribe(
            (response:IEmployee)=>{
                this.employee = response
            },
            (error)=>{
                console.log(error);
                this.status = 'No employee found';
            }
        );
    }

}