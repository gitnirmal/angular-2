import { Component, OnInit, Input, Output, EventEmitter, SimpleChanges, OnChanges } from '@angular/core';

@Component({
    selector:'test-app',
    templateUrl:'./test.component.html'
})

export class TestComponent implements OnInit, OnChanges{

    private voted:boolean = false;
    @Input('master') masterName: string;

    @Output() onVoted = new EventEmitter<boolean>();

    constructor(){

    }

    ngOnInit(){

    }

    ngOnChanges(changes:SimpleChanges){
        for (let propName in changes) {
            let chng = changes[propName];
            let cur  = JSON.stringify(chng.currentValue);
            let prev = JSON.stringify(chng.previousValue);
            console.log(`${propName}: currentValue = ${cur}, previousValue = ${prev}`);
        }
    }

    doVote(vote:boolean){
        this.onVoted.emit(vote);
        this.voted = true;
    }

}