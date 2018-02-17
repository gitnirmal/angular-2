import { Component, OnInit} from '@angular/core';

import { ActivatedRoute,Router } from '@angular/router';

import { IEmployee } from '../employeeList/employee.interface';
import { EmployeeService } from '../employeeList/employee.service';

import 'rxjs/add/operator/retry';
import 'rxjs/add/operator/retryWhen';
import 'rxjs/add/operator/delay';
import 'rxjs/add/operator/scan';

import { ISubscription } from 'rxjs/Subscription';

@Component({
    templateUrl: './employee.component.html'
})

export class EmployeeComponent implements OnInit{

    private employee:IEmployee;
    private status:string = 'Fetching employee...';

    subs:ISubscription;

    constructor(private _employee:EmployeeService, private _routeParams: ActivatedRoute, private _route:Router){

    }

    unsubscribeCall():void{
        this.subs.unsubscribe();
        this.status = 'Request cancelled';
    }

    ngOnInit(){
        let employeeId;
        this._routeParams.params.subscribe(params=>{
            employeeId = params['id'];
        });
        this.subs = this._employee.getEmployeeById(employeeId)
            .retryWhen((err) => {
                return err.scan((retryCount)=> {
                    retryCount++;
                    if(retryCount<6){
                        this.status = 'Retrying... Attemp #'+retryCount;
                        return retryCount;
                    }else{
                        throw(err)
                    }
                }, 0).delay(1000)
            })
            .subscribe((response:IEmployee)=>{
                this.employee = response
            },
            (error)=>{
                console.log(error);
                this.status = 'No employee found';
            }
        );

        // this._employee.getEmployeeById(employeeId).then(
        //     (response:IEmployee)=>{
        //         this.employee = response
        //     }            
        // ).catch((error)=>{
        //         console.log(error);
        //         this.status = 'No employee found';
        //     });
    }

    backToList():void{
        this._route.navigate(['/employee']);
    }

}