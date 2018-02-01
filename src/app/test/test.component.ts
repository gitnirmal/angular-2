import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector:'test-app',
    templateUrl:'./test.component.html'
})

export class TestComponent implements OnInit{

    private voted:boolean = false;
    @Input('master') masterName: string;

    @Output() onVoted = new EventEmitter<boolean>();

    constructor(){

    }

    ngOnInit(){

    }

    doVote(vote:boolean){
        this.onVoted.emit(vote);
        this.voted = true;
    }

}