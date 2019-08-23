import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-vote',
  templateUrl: './vote.component.html',
  styleUrls: ['./vote.component.css']
})
export class VoteComponent implements OnInit {
  
  var upvote = 0
  var downvote = 0;
upVote(){
  this.upvote = this.upvote+1
}
downVote(){
  this.downvote = this.downvote+1
}
  constructor() { }

  ngOnInit() {
  }

}
