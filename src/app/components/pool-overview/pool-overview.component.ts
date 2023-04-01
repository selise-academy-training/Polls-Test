import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PoolModel } from '../../../app/Model/Pool';

@Component({
  selector: 'app-pool-overview',
  templateUrl: './pool-overview.component.html',
  styleUrls: ['./pool-overview.component.scss'],
})
export class PoolOverviewComponent implements OnInit {
  meetingName: string = '';
  poolModel : PoolModel = new PoolModel();
  poolList : PoolModel[] = [] ;
  lastId : number = 0 ;
  constructor(private router : Router) {}

  ngOnInit(): void {
	this.getPools() ;
  }
  getPools() {
	let data = localStorage.getItem("pools") || "" ;
	 this.poolList = JSON.parse(data);
	 (this.poolList || []).forEach(element => {
		this.lastId = element.ItemId ;
		 console.error(element.MeetingName);
	 });
	 console.log("data=>" , this.poolList);
  }

  onClickAdd() {
	this.poolModel["ItemId"] = this.lastId + 1 ;
	this.poolModel["MeetingName"] = this.meetingName ;
	this.poolModel.Vote = [] ;
	this.poolList.push(this.poolModel);
	let strFy = JSON.stringify(this.poolList);
	localStorage.setItem("pools" , strFy);
	this.router.navigate(['details' , this.poolModel.ItemId]);
	
  }
}
