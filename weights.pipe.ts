import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
    name : 'weightTransform'
})
export class WeightTransformPipe implements PipeTransform{

    transform(value:number, format:string) : number {
        return (format == 'kg') ? value/2.20462 : value*2.20462;
    }
}