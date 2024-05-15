import { Component } from '@angular/core';
import { ChildCompComponent } from './child-comp/child-comp.component';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import {MatSnackBar} from '@angular/material/snack-bar';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {FormsModule} from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';

// Control how this component works
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ChildCompComponent, MatSlideToggleModule, MatFormFieldModule, FormsModule, MatInputModule, MatButtonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

// How the frontend .html is being handled
// TS is type dependant
export class AppComponent {
  title:string = 'update!';
  countNum:number = 20

  // Adding 1 to our countNum variable set above
  addNum = () => {
  // Query selector to grab input value
  // inputNum.value = x
    let x = 2
    this.countNum = this.countNum + x
  }

  // A function that tracks the output event from the child comp and does something with it
  resetNumberParent = (x:number) => {
    this.countNum = x
  }

  durationInSeconds = 5;
  constructor(private _snackBar: MatSnackBar) {}

  openSnackBar() {
    this._snackBar.openFromComponent(PizzaPartyComponent, {
      duration: this.durationInSeconds * 1000,
    });
  }

}

@Component({
  selector: 'snack-bar-component-example-snack',
  templateUrl: 'snack-bar-component-example-snack.html',
  styles: `
    .example-pizza-party {
      color: hotpink;
    }
  `,
  standalone: true,
})

export class PizzaPartyComponent {}
