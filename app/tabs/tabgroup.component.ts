import {
  Component, ViewEncapsulation,
  Query, QueryList
} from 'angular2/core';
import {TabComponent} from './tab.component';
import {TabnavComponent} from './tabnav.component';

@Component({
  selector: 'tabgroup',
  templateUrl: 'app/tabs/tabgroup.tpl.html',
  directives: [TabnavComponent],
  inputs: []
})
export class TabgroupComponent {
  // todo: ContentChildren doesn't seem to work...
  constructor(@Query(TabComponent) protected tabs: QueryList<TabComponent>){
    this.onTabsChange();

    tabs.changes.subscribe(_ => this.onTabsChange());
  }

  onTabsChange() {
    this.tabs.map(tab => this.attachTab(tab));
  }

  attachTab(tab: TabComponent) {
    tab.group = this;
  }

  onSelectTab(selectedTab: TabComponent) {
    // How to display tabs are the policy of tabgroup
    // Here we only allow one tab displayed at a time
    this.tabs.map(tab => {
      tab.active = (tab === selectedTab) ? true : false;
    })
  }
}