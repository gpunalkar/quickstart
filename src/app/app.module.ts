import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

import { AppComponent }  from './components/app.components/app.component';
import { UserComponent }  from './components/user.component/user.component';
import { AboutComponent }  from './components/about.component/about.component';

import { Routing }  from './config/app.routes';
;


@NgModule({
  imports:      [ BrowserModule, Routing, HttpModule, FormsModule ],
  declarations: [ AppComponent, UserComponent, AboutComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
