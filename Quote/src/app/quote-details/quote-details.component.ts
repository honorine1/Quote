import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote-details',
  templateUrl: './quote-details.component.html',
  styleUrls: ['./quote-details.component.css']
})
export class QuoteDetailsComponent implements OnInit {

  
@Input() quote: Quote;
@Output() isVote = new EventEmitter<boolean>();
quoteDelete(vote:boolean){
  this.isVote.emit(vote);
}



  constructor() { }

  ngOnInit() {
  }

}


