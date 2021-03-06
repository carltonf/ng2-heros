import {Component, OnInit, ViewEncapsulation} from 'angular2/core'
import {TabgroupComponent} from './tabgroup.component'

let tabIdCounter = 0;

@Component({
  selector: 'tab',
  // NOTE `ng-content` is just Angular2's content insertion point of Shadow DOM
  // `content` is NOT ok, as it's not standard yet.
  template: `
    <div *ngIf="active">
      <ng-content></ng-content>
    </div>
  `,
  inputs: ['title:tabTitle'],
  directives: [],
})
export class TabComponent {
  public id: number;
  public title: string = 'Tab';
  public active: boolean = false;
  public group: TabgroupComponent;

  constructor() {
    this.id = tabIdCounter++;
  }

  toggle() {
    this.active = !this.active;
  }
  show() {
    this.active = true;
  }
  hide() {
    this.active = false;
  }
}