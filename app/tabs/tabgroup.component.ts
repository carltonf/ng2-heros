import {Component, ViewEncapsulation} from 'angular2/core'
import {TabComponent} from './tab.component'

@Component({
  selector: 'tabgroup',
  template: `
    <ul>
      <li *ngFor="#tab of tabs">{{ tab.title }}</li>
    </ul>

    <ng-content></ng-content>
  `,
  directives: [TabComponent],
  inputs: []
})
export class TabgroupComponent {
  tabs: TabComponent[] = [];

  addTab(tab: TabComponent) {
    this.tabs.push(tab);
  }
}