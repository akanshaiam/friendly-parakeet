import {Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector : 'counter-comp',
    inputs: ['counter'],
    outputs: ['counterChanged'],
    template: `<div (click)='counterEvent()'>
    Please click here!!
    </div>`
})
export class CounterComponent {
    counter : number;
    public counterChanged = new EventEmitter();

    counterEvent(evt:Event) {
        this.counterChanged.emit(this.counter);
        this.counter++;
    }
}