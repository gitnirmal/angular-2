import { Component, OnInit} from '@angular/core'

@Component({
    templateUrl: './home.component.html'
})

export class HomeComponent implements OnInit{

    private master:string = 'Nirmal';
    private agreed:number = 0;
    private disagreed:number = 0;

    constructor(){
        
    }

    ngOnInit(){

    }

    onVoted(agreed:boolean){
        agreed ? this.agreed++ : this.disagreed++;
    }

}