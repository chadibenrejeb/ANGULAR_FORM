import { Component, NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MyFirstCompComponent } from './my-first-comp/my-first-comp.component';
import { FormsModule } from '@angular/forms';
import { MessageDetailsComponent } from './message-details/message-details.component';
import { MyFirstService } from './services/my-first.service';
import { RouterModule, Routes } from '@angular/router';
import { MenuComponent } from './menu/menu.component';
import { AboutComponent } from './about/about.component';

// const routes: Routes = [
//   {
//     path: '',
//     component: MyFirstCompComponent
//   },
//   // {
//   //   path: 'about',
//   //    component: MessageDetailsComponent
//   // },
//   {
//     path: 'contact',
//     component: MyFirstCompComponent
//   },
// ];

@NgModule({
  declarations: [
    AppComponent,
    MyFirstCompComponent,
    MessageDetailsComponent,
    MenuComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    //RouterModule.forRoot(routes)
  ],
  providers: [
    provideClientHydration(),
    MyFirstService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
