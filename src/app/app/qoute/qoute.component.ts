import { Component, OnInit } from '@angular/core';
import { Quote } from 'src/app/quote'; 

@Component({
  selector: 'app-quote',
  templateUrl: '././qoute.component.html',
  // templateUrl; './w'
  styleUrls: ['./qoute.component.css']
})
export class QuoteComponent implements OnInit {
  quotes: Quote[] = [
    new Quote(2, 'Courage', '“It takes a great deal of bravery to stand up to our enemies, but just as much to stand up to our friends."', 'Pote', 'Walden Schaefer', new Date(2021, 12, 23), 0, 0),

    new Quote(5, 'Pain', '“The more we diminish our own pain, or rank it compared to what others have survived, the less empathetic we are to everyone.”', '-Brene Brown', 'Michelle', new Date(2022, 2, 27), 0, 0),


    new Quote(4, 'Success', '“To succeed in life, you need two things: ignorance and confidence.”', '-Mark Twain', 'Michael Yotto', new Date(2022, 2, 11), 0, 0),

    // new Quote(1, 'Love', '""Love is that condition in which the happiness of another person is essential to your own.."', 'Pinocchio', 'Woodey', new Date(2021, 11, 17), 0, 0),

    // new Quote(6, 'Happiness', ' “Happiness quite unshared can scarcely be called happiness; it has no taste.”', 'Charlotte Bronte`', 'Brenda', new Date(2022, 3, 2), 0, 0),
  ];
  toggleDetails(index: any) {
    this.quotes[index].showDetails = !this.quotes[index].showDetails;
  }
  addNewQuote(quote: any) {
    let quoteLength = this.quotes.length;
    quote.id = quoteLength + 1;
    this.quotes.push(quote);
  }

  deleteQuote(isSeen: any, index: any) {
    if (isSeen) {
      let toDelete = confirm(`Are you sure you want to delete Quote about  ${this.quotes[index].quote} ? `)

      if (toDelete) {
        this.quotes.splice(index, 1);
      }
    }
  }



  constructor() { }

  ngOnInit(): void {
  }

}
