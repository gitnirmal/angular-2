import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name:'emailPhoneFormator'
})

export class EmailPhoneFormatorPipe implements PipeTransform{
    transform(value:string, param:string){
        if(param==='email'){
            return 'E: '+value;
        }else if(param==='phone'){
            return 'P: '+value;
        }
    }
}