import { Component } from '@angular/core';

@Component({
    selector : 'random-quote',
    template : `<style>.quote {
        background-color : #ffff00;
    }
    </style>
    <div><h2>Random Quote</h2>
        <p class="quote">{{quote.line}} - {{quote.author}}</p></div>`
})
export class RandomQuoteComponent {
    //quote : string = "No pain no gain!!";

    quotes : Object[] = [{
        "line":"With great power comes great responsibility",
        "author" : "Uncle Ben"
    }, {
        "line":"Nine people can't make a baby in one month.",
        "author" : "Fred Brooks"
    }];

    randomIndex : number = Math.floor(Math.random()*this.quotes.length);

    quote = this.quotes[this.randomIndex];
}