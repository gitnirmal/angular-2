import { Injectable } from '@angular/core';

import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/toPromise';

import { IEmployee } from './employee.interface';

@Injectable()
export class EmployeeService{

    private serviceUrl = 'https://jsonplaceholder.typicode.com/users';

    constructor(private _http:Http){        
    }

    getEmployeeList():Observable<IEmployee[]>{
        return this._http.get(this.serviceUrl)
                            .map((response:Response)=>response.json())
                            .catch(this.handleError);
    }

    getEmployeeById(id:number):Observable<IEmployee>{
        return this._http.get(this.serviceUrl+'/'+id)
                            .map((response:Response)=>response.json())
                            .catch(this.handleError);
    }

    // getEmployeeById(id:number):Promise<IEmployee>{
    //     return this._http.get(this.serviceUrl+'/'+id)
    //                         .map((response:Response)=>response.json())
    //                         .toPromise()
    //                         .catch(this.handlePromiseError);
    // }

    handleError(error:Response){
        return Observable.throw(error);
    }

    handlePromiseError(error:Response){
        throw(error);
    }

}