import {Component, OnInit, ViewEncapsulation} from 'angular2/core'
import {TabgroupComponent} from './tabgroup.component'

@Component({
  selector: 'tab',
  template: `
    <div>
      <ng-content></ng-content>
    </div>
  `,
  inputs: ['title:tabTitle']
})
export class TabComponent implements OnInit {
  constructor(private _tabgroup: TabgroupComponent) { }
  public title: string = 'Tab';

  attachToTabgroup() {
    this._tabgroup.addTab(this);
  }
  ngOnInit() {
    this.attachToTabgroup();
  }
}