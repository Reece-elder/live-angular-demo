import { Component, EventEmitter, Input, Output } from '@angular/core';
import { SmallChildCompComponent } from '../small-child-comp/small-child-comp.component';

@Component({
  selector: 'app-child-comp',
  standalone: true,
  imports: [SmallChildCompComponent],
  templateUrl: './child-comp.component.html',
  styleUrl: './child-comp.component.css'
})

export class ChildCompComponent {

  // Inputs in a child comp allow you to pass data from the parent into it
  // countNum:number = 0
  @Input() childNum:number = 30

  // Outputs allow you to pass data backwards from it child -> parent 
  // Make a new variable called outputNumberEvent which is a new eventEmitter that will contain a number
  @Output() outputNumberEvent = new EventEmitter<number>()

  resetNum = () => {
    this.outputNumberEvent.emit(0)
  }

}
