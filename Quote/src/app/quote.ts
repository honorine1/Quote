export class Quote {
    // id:number;
    // name:string;
    // author:string;
showAuthor: boolean;
constructor(public id:number,public quote: string,public author: string,public UpvoteDate: Date){
    this.showAuthor=false;
}

}
