import {
  Component, ViewEncapsulation,
  Query, QueryList
} from 'angular2/core';
import {TabComponent} from './tab.component';

@Component({
  selector: 'tabgroup',
  templateUrl: 'app/tabs/tabgroup.tpl.html',
  directives: [],
  inputs: []
})
export class TabgroupComponent {
  // tabs: QueryList<TabComponent>;
  activeTab: TabComponent;

  attachTab(tab: TabComponent) {
    tab.group = this;
  }
  // Get all tab children using Query API
  // see src/core/Query for example
  // todo: ContentChildren doesn't seem to work...
  constructor(@Query(TabComponent) private _tabs: QueryList<TabComponent>){
    _tabs.map(tab => this.attachTab(tab));
    _tabs.changes.subscribe(tab => this.attachTab(tab));
  }

  onSelectTab(tab: TabComponent) {
    this.setActiveTab(tab);
    this.refreshTabgroupDisplay();
  }

  setActiveTab(tab: TabComponent) {
    this.activeTab = tab;
  }

  refreshTabgroupDisplay(){
    // How to display tabs are the policy of tabgroup
    // Here we only allow one tab displayed at a time
    this._tabs.map(tab => tab.active = false);
    this.activeTab.active = true;
  }
}