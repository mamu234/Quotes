import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-vote',
  templateUrl: './vote.component.html',
  styleUrls: ['./vote.component.css']
})
export class VoteComponent implements OnInit {

  @Output() vote = new EventEmitter <number>();

totalUpvotes : number = 0 ;
totalDownVotes: number = 0;

  constructor() { }

  upVote(){
    this.totalUpvotes += 1
    this.vote.emit(this.totalUpvotes)
  }
  downVote(){
    this.totalDownVotes += 1
    this.vote.emit(this.totalDownVotes)
  }
  
     
  

  ngOnInit(): void {
  }

}

