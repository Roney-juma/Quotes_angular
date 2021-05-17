import { Component, OnInit } from '@angular/core';
import { Quote } from '../quotes';

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnInit {
  quotes: Quote[] = [
    new Quote(1, "Get busy living or get busy dying..", 'Stephen King', new Date(2017, 5, 4)),
    new Quote(2, "Gamble everything for love, if you're a true human being.", 'MICHAEL JORDAN', new Date(2011, 1, 19)),
    new Quote(3, "You only live once, but if you do it right, once is enough..", 'Mae West', new Date(2010, 3, 9)),
    new Quote(4, "Never let the fear of striking out keep you from playing the game..", 'Roney Juma', new Date(2021, 2, 23)),
  ];

  toggleDescription(index: any) {
    this.quotes[index].showDescription = !this.quotes[index].showDescription;
  }

  removeQuote(ToDelete: any, index: any) {
    if (ToDelete) {
      let choice = confirm(`Are you sure to delete the quote ${this.quotes[index].name}`)
      if (choice) {
        this.quotes.splice(index, 1);
      }
    }
  }

  addNewQuote(quote:any) {
    let quoteLength = this.quotes.length;
    quote.id = quoteLength + 1;
    quote.creationDate = new Date(quote.creationDate)
    this.quotes.push(quote)
  }

  constructor() { }

  ngOnInit(): void {
  }

}
