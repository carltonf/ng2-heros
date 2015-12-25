import {Component, ViewEncapsulation} from 'angular2/core';
// There is NO node style folder module resolution
// ref: https://github.com/Microsoft/TypeScript/issues/5039
// To use Tabgroup and Tab, both need to be imported
import {TabgroupComponent} from './tabs/tabgroup.component';
import {TabComponent} from './tabs/tab.component';
import {HeroesBoard} from './heroes-board.component/index';

@Component({
  // Ref: http://blog.thoughtram.io/angular/2015/06/29/shadow-dom-strategies-in-angular2.html
  // Use native Shadow DOM instead of attribute tricks
    encapsulation: ViewEncapsulation.Native,
    selector: 'my-app',
    moduleId: module.id,
    templateUrl: 'app.tpl.html',
  // NOTE: be explicit of using Array to avoid WebStorm warnings.
  directives: [
    HeroesBoard,
    TabgroupComponent, TabComponent,
  ],
})
export class AppComponent {
  public title = 'Tour of Heroes';
}
