import { Component, Inject, PLATFORM_ID, AfterViewInit } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

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

  nameInput: HTMLInputElement | null = null;
  emailInput: HTMLInputElement | null = null;
  messageInput: HTMLTextAreaElement | null = null;
  messages : Array<any> = [] ;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

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
    this.messages.push({
      'name' : this.name , 
      'email': this.email,
      'message' : this.message
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
  this.messages.splice(index, 1);
 }
}
