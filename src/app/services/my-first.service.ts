import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MyFirstService {

  messages : Array<any> = [] ; 

  constructor() { 
    this.init();
  }

  init() : void {
    this.insert({
      name : "chadi" , 
      email : "rejebchadi@gmail.com" , 
      message : "wah"
    });
    this.insert({
      name : "ahmed" , 
      email : "ahmed2024@gmail.com" , 
      message : "hello this is ahmed"
    });
  }

  insert(message : {name : string , email : string , message : string}) : void { 
      this.messages.push(message);
  }

  getAllMessages(): any[] {
    return this.messages;
  }

  deleteMessage(index : number) : void {
    this.messages.splice(index , 1);
  }
  }
