export class Quote {
    // id:number;
    // name:string;
    // author:string;
showAuthor: boolean;
constructor(public id:number,public pname: string, public quote: string,public author: string,public voteDate: Date){
    this.showAuthor=false;
}

}
