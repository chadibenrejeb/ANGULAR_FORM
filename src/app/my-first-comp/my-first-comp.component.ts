import { Component, Inject, PLATFORM_ID, AfterViewInit, inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { MyFirstService } from '../services/my-first.service';

@Component({
  selector: 'app-my-first-comp',
  templateUrl: './my-first-comp.component.html',
  styleUrls: ['./my-first-comp.component.scss']
})
export class MyFirstCompComponent implements AfterViewInit {
  name: string = '';
  email: string = ''; 
  message: string = '';
  isSubmitted: boolean = false;
  messages : Array<any> = [] ;
  // private service : MyFirstService = inject(MyFirstService); // proprety injection 

  nameInput: HTMLInputElement | null = null;
  emailInput: HTMLInputElement | null = null;
  messageInput: HTMLTextAreaElement | null = null;
  

  constructor(
    @Inject(PLATFORM_ID)
     private platformId: Object ,
     private service : MyFirstService // Constructor injection 
    ) {
      this.messages = this.service.getAllMessages();
      this.isSubmitted = this.messages.length > 0 ; // true cauz the init 7atit users donc length > 0 => true
    }

  ngAfterViewInit() {
    if (isPlatformBrowser(this.platformId)) { 
      this.nameInput = document.getElementById('name') as HTMLInputElement;
      this.emailInput = document.getElementById('email') as HTMLInputElement;
      this.messageInput = document.getElementById('message') as HTMLTextAreaElement;
    }
  }


  onSubmit() {
    if(this.name!="" && this.email!="" && this.message!= ""){
    console.log('Name:', this.name);
    console.log('Email:', this.email);
    console.log('Message:', this.message);
    this.isSubmitted = true;
    this.service.insert({
      "name" : this.name, 
      "email" : this.email,
      "message" : this.message
      });
    console.log(this.messages);
  
     

    if (this.nameInput) {
      this.nameInput.value = '';
    }
    if (this.emailInput) {
      this.emailInput.value = '';
    }
    if (this.messageInput) {
      this.messageInput.value = '';
    }
  }
 }

 deleteMessage(index: number): void {
  this.service.deleteMessage(index);
 }
}
