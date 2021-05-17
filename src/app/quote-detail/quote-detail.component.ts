import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Quote } from '../quotes';

@Component({
  selector: 'app-quote-detail',
  templateUrl: './quote-detail.component.html',
  styleUrls: ['./quote-detail.component.css']
})
export class QuoteDetailComponent implements OnInit {
  @Input() quote: Quote | any;

  @Output() ToDelete = new EventEmitter();

  quoteDelete(complete:boolean){
    this.ToDelete.emit(complete);
  }

  addUpVote(){
    this.quote.upVote++;
  }
  addDownVote(){
    this.quote.downVote++
  }

  constructor() { }

  ngOnInit(): void {
  }

}
