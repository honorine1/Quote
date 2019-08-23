import { Component, OnInit,Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-vote',
  templateUrl: './vote.component.html',
  styleUrls: ['./vote.component.css']
})
export class VoteComponent implements OnInit {
  
  uvote = 0
  dvote = 0;
upVotes(){
  this.uvote = this.uvote+1
}
downVotes(){
  this.dvote = this.dvote+1
}

// @Output() upVote = new EventEmitter<boolean>();
// @Output() downVote = new EventEmitter<boolean>();
  constructor() { }

  ngOnInit() {
  }

}
