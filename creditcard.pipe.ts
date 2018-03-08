import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name : 'cardPipe'
})
export class CreditCardPipe implements PipeTransform {
    transform(value:string) : string {
        if(value.length == 15 && value.startsWith('3')) {
            return 'American Express Card';
        } else if(value.length == 16 && value.startsWith('4')) {
            return 'VISA';
        } else if(value.length == 16 && value.startsWith('5')) {
            return 'MasterCard';
        } else return 'Unknown Card Type';
    }
}