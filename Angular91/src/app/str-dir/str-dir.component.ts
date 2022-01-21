import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-str-dir',
  template: `
    <h4>Structural Dirs</h4>
    <h5 *ngIf="display; else elseBlock">Hello World</h5>

    <ng-template #elseBlock>
      <h5>Name is Hidden</h5>
    </ng-template>

    <hr>
    <div *ngIf="display; then thenBlock1; else elseBlock1"></div>


    <ng-template #thenBlock1>
      <h2>Content Projection</h2>
    </ng-template>
    <ng-template #elseBlock1>
      <h2>Component Interaction</h2>
    </ng-template>

    <hr>
    <div [ngSwitch]="color">
      <div [style.color]="color" *ngSwitchCase="'red'">You picked red color</div>
      <div [style.color]="color" *ngSwitchCase="'blue'">You picked blue color</div>
      <div [style.color]="color" *ngSwitchCase="'green'">You picked green color</div>
      <div *ngSwitchDefault>Check Again</div>
    </div>
  `,
  styles: [
  ]
})
export class StrDirComponent implements OnInit {

  constructor() { }

  display = true
  color = "purple"
  ngOnInit(): void {
  }

}
