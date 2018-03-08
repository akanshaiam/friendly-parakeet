import { Injectable } from '@angular/core';

@Injectable()
export class PeopleData {
    private goodPeople = [
        {name : "Roger Federer", yearborn : "1981"},
        {name : "B Obama", yearborn : "1961"},
        {name : "N Modi", yearborn  : "1950"}
    ];

    getAllGoodPeople() {
        return this.goodPeople;
    }
}