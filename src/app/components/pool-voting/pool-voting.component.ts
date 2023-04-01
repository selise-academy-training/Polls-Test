import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { PoolModel, VotingInfo } from '../../../app/Model/Pool';

@Component({
  selector: 'app-pool-voting',
  templateUrl: './pool-voting.component.html',
  styleUrls: ['./pool-voting.component.scss']
})
export class PoolVotingComponent implements OnInit {
  poolList : PoolModel[] = [] ;
  poolData : PoolModel = new PoolModel() ;
  voterName : string = '' ;
  voteOption : string = 'YES';
  vote : VotingInfo = new VotingInfo() ;
  constructor(    private route: ActivatedRoute,
    private router : Router

    ) { }

  ngOnInit(): void {
    this.getPools() ;
  }

  getPools() {
    const id = parseInt(this.route.snapshot.paramMap.get('id')!, 10);
    let data = localStorage.getItem("pools") || "" ;
     this.poolList = JSON.parse(data);
     this.poolData = this.poolList.filter(item=> item.ItemId === id)[0];
     this.voterName = '';
     this.voteOption = 'YES' ;
    }

    onClickAdd(){
      const id = parseInt(this.route.snapshot.paramMap.get('id')!, 10);
      this.vote["Id"] = 0 ;
      this.vote["Name"] = this.voterName ; 
      this.vote["Vote"] = this.voteOption ;
      let index = this.poolList.findIndex(item=> item.ItemId === id);
      this.poolData.Vote.push(this.vote);
      this.poolList[index] = this.poolData ;
      let strFy = JSON.stringify(this.poolList);
      localStorage.setItem("pools" , strFy);
      this.getPools();
      console.error(this.poolList);
    }

    goBack(){
      this.router.navigate(['pool']);
    }

}
