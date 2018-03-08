import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule }   from '@angular/forms';
import { HttpModule } from '@angular/http';
import { routing } from './app.routes';

import { AppComponent } from './app.component';
import { RandomQuoteComponent } from './randomquote.component';
import { CounterComponent } from './counter.component';
import { LoadedTimeComponent } from './loadedtime.component';
import { BorderClassComponent } from './border.component';
import { BirdsComponent } from './birds.component';
import { AnimalsComponent } from './animals.component';
import { HomeComponent } from './home.component';

import {TempConvertPipe} from './convert.pipe';
import {MyDirective} from './demo.directive';

import { PeopleData } from './people.service';
import { PostsService } from './posts.service';

@NgModule({
  declarations: [
    AppComponent,
    RandomQuoteComponent,
    CounterComponent,
    LoadedTimeComponent,
    TempConvertPipe,
    MyDirective,
    BorderClassComponent,
    BirdsComponent,
    AnimalsComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    routing
  ],
  providers: [
    PeopleData,
    PostsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
