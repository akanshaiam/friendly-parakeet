import { Component, OnInit } from '@angular/core';
import { PeopleData } from './people.service';
import { PostsService } from './posts.service';
import { Posts } from './posts.model';

@Component({
  selector: 'app-root',
  template: `<div><h1>{{title}}</h1>
    <p>{{ 98.6 | TempConvert : 'C'}}</p>
    <hr><br>
    <h3>Weight Convert Pipe Demo</h3>
    <p>{{ 25 | weightTransform : 'kg'}}</p>
    <br><hr>
    <hr><br>
    <h3>Credit Card Type Pipe Demo</h3>
    <p>{{ '5655764236542345' | cardPipe}}</p>
    <br><hr>
    <random-quote></random-quote>
    <hr/>
    <counter-comp [counter]="counterVal" (counterChanged)="handleCounterEvent($event)"></counter-comp>
    <br><br>
    <loaded-time [format]="formatType" (pageRendered)="handleEvent($event)"></loaded-time>
    <p>The page was clicked on at {{displayTime}}</p>
    <br><br>
    <form #form="ngForm">
    First name : <input type="text" ngModel name="fname" myDirective required/><br>
    Last name : <input type="text" ngModel name="lname" myDirective required/><br>
    <input type="button" name="btn1" value="Click" [disabled]="!form.valid" (click)="changeTitle(form)"/>
    </form>
    <hr/>
    <pre>{{form.value | json}}</pre>
    <div *ngIf="comments.length>0; else nocomments">
      <p> Comments go here ... </p>
    </div>
    <ng-template #nocomments>
      <p>No Comments</p>
    </ng-template>
    <border-comp>Hello world</border-comp>
    </div>
    <div *ngFor="let person of peopleObj">
      <span>{{person.name}} - {{person.yearborn}}</span>
    </div>
    <br><br>
    <h3>Http Response</h3>
    <div *ngFor="let post of postsList">
      <span>{{post.title}} - {{post.id}}</span>
    </div>
    <div>
        <div><a routerLink='/'>Home</a></div>
        <div><a routerLink='/animals'>Animals</a></div>
        <div><a routerLink='/birds'>Birds</a></div>
    </div>
    <hr/>
    <router-outlet></router-outlet>`,
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'App Component';
  counterVal : number = 2;
  formatType : string = '24 hour';
  displayTime;
  today : Date = new Date();
  comments : string[] = [];
  peopleObj : Object ;
  postsList : Posts ;

  constructor(private people : PeopleData, private posts : PostsService) {

  }

  changeTitle(form:any) {
    this.title = (this.title == 'Hello World') ? 'App Component' : 'Hello World';
    alert(form.valid);
    alert("Hello, " + form.controls.fname.value + " " + form.controls.lname.value);
  }

  handleCounterEvent(e:Event){
    console.log(e);
  }

  handleEvent(e:Event) {
    this.displayTime = e;
  }
  
  ngOnInit() {
    this.peopleObj = this.people.getAllGoodPeople();
    /** When using promise object */
    /*this.posts.getposts().(
      (posts) => this.postsList = posts
    );*/
    this.posts.getPosts().subscribe(
      (data) => this.postsList = data,
      (error) => console.log(error),
      () => console.log("Done")
    );
  }
}
