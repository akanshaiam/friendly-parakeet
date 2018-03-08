import { Component } from '@angular/core';

@Component({
    selector: 'border-comp',
    template : `<div style='border:1px solid black; border-radius:5px; box-shadow: 5px 5px 5px #444'>
    <ng-content></ng-content>
    </div>`
})
export class BorderClassComponent {
    
}