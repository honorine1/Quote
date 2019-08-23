import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote'
@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  quotes : Quote [] = [
    // quotes: Quote = [
      {id:1,name:'The first step toward success is taken when you refuse to be a captive of the environment in which you first find yourself.',author:' Mark Cain'},
      {id:2,name:'When one door of happiness closes, another opens; but often we look so long at the closed door that we do not see the one which has been opened for us.',author:'Helen Keller'},
      {id:3, name: 'Twenty years from now you will be more disappointed by the things that you didn’t do than by the ones you did do..',author:'Mark Twain'},
    ];

  constructor() { }

  ngOnInit() {
  }

}
