export class PoolModel {
    ItemId : number ;
    MeetingName : string ;
    Vote : VotingInfo[];
    constructor(){
        this.ItemId = 0 ;
        this.MeetingName = '' ;
        this.Vote = [] ;
    }
}

export class VotingInfo {
    Id : number = 0;
    Name : string = '' ;
    Vote : string = '' ;
}