import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote'
@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  quotes : Quote [] = [
      new Quote (1,'H.R','The first step toward success is taken when you refuse to be a captive of the environment in which you first find yourself.',' Mark Cain',new Date(2019/9/1)),
      new Quote (2,'M.D','When one door of happiness closes, another opens; but often we look so long at the closed door that we do not see the one which has been opened for us.','Helen Keller',new Date(2019/9/1)),
      new Quote (3,'S.K', 'Twenty years from now you will be more disappointed by the things that you didn’t do than by the ones you did do..','Mark Twain',new Date(2019/9/1)),
      new Quote (4,'H.R','Happy people plan actions, they don’t plan results.','— Dennis Waitley',new Date(2019/12/1)),
    ];
deleteQuote(isVote, index){
  if (isVote) {
    let toDelete = confirm(`Are you sure you want to delete ${this.quotes[index].quote}?`)

    if (toDelete){
      this.quotes.splice(index,1)
    }
  }
}
toggleDetails(index){
  this.quotes[index].showAuthor = !this.quotes[index].showAuthor;
}
addNewQuote(  quote){
  let quoteLength = this.quotes.length;
  quote.id = quoteLength+1;
  quote.voteDate = new Date(quote.voteDate)
  this.quotes.push(quote)
}
  constructor() { }

  ngOnInit() {
  }

}


