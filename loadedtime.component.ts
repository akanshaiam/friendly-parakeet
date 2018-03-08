import {Component, Input, Output, EventEmitter } from '@angular/core';
import { DatePipe } from '@angular/common';

@Component({
    selector : 'loaded-time',
    inputs : ['format'],
    outputs : ['pageRendered'],
    template : `<div (click)="emitLoadTime()">
        Hello There!!
    </div>`
})
export class LoadedTimeComponent {
    currentTime : Date = new Date();
    format : string;
    emittedTime : string;

    public pageRendered = new EventEmitter();

    emitLoadTime(evt : Event) {
        const options = {
            'hours' : 'numeric',
            'minutes':'numeric',
            'hour12' : !(this.format == '24 hour')
        };
        this.emittedTime = this.currentTime.toLocaleTimeString("en-US",options);
        this.pageRendered.emit(this.emittedTime);
    }    

}