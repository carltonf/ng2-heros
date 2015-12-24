import { Component, OnInit,
  ViewEncapsulation,
  EventEmitter,
} from 'angular2/core';
import {TabComponent} from './tab.component';
import {TabgroupComponent} from './tabgroup.component';

@Component({
  selector: 'tabnav',
  template: `
    <ul>
      <li *ngFor="#tab of tabs" (click)="onSelectTab(tab)">
        {{ tab.title }}
      </li>
    </ul>
  `,
  inputs: ['tabs'],
  outputs: ['selectTabEvt:selectTab']
})
export class TabnavComponent {
  tabs: TabComponent[];
  selectTabEvt = new EventEmitter<TabComponent>();

  onSelectTab(tab: TabComponent) {
    this.selectTabEvt.emit(tab);
  }
}