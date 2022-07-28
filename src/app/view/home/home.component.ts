import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  
})
export class HomeComponent implements OnInit {
show:boolean = false
showImg:boolean = false
showVid:boolean= false
img="https://tsh.io/wp-content/uploads/2019/08/angular-new-features-lead_.jpg"
vid="https://youtu.be/VAkio68d51A"
  constructor() {

 
  }
  ngOnInit(): void {
  

  }
  people: any[] = [
    {
      texts: 'Unidirectional dataflow is a programming pattern that deals with how data is updated. There are two main patterns currently in use — unidirectional and bidirectional. The uni part of unidirectional refers to the idea that data can only flow in one direction.      For the front end, once a view has been rendered, an action is required to change the data and re-render the entire or portion of a view from scratch.      React does this by default and there is no explicit binding available to allow the view to update without direct action from the layers beneath it.      Updates happen in one direction and one direction only. The data is not expected to change and is therefore considered immutable. When something happens and a change occurs, that state no longer exists and it is considered a new entity entirely by the view.      Change is caused by an external action. When this happens, the view is wiped clean and re-rendered with the new data. This is unidirectional in a nutshell: a one way dataflow where data can only move in one direction and cannot backtrace in the direction it just came from.    Angular components are a subset of directives, always associated with a template. Unlike other directives, only one component can be instantiated for a given element in a template. A component must belong to an NgModule in order for it to be available to another component or application.',
      header: "Unidirectional Dataflow"
      
    }
  ]
toggle(){
  this.show =!this.show;
  this.showVid = false
  this.showImg = false


}
toggleImg(){
  this.showImg =!this.showImg;
  this.show = false
  this.showVid = false
}
toggleVid(){
  this.showVid =!this.showVid;
  this.show = false
  this.showImg = false
}
}
