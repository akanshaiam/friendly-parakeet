import { Pipe,PipeTransform } from '@angular/core';

@Pipe({
    name : 'TempConvert'
})
export class TempConvertPipe implements PipeTransform {
    transform(value : number, format:string) : number {
        return (format == 'F') ? ((value*9/5) + 32) : ((value - 32)*5/9);
    }
}