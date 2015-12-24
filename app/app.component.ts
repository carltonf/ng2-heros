import {Component, OnInit, ViewEncapsulation} from 'angular2/core'
import {Hero} from './hero'
// There is NO node style folder module resolution
// ref: https://github.com/Microsoft/TypeScript/issues/5039
import {HeroDetailComponent} from './hero-detail.component/index'
import {HeroListComponent} from './hero-list.component/index'

// To use Tabgroup and Tab, both need to be imported
import {TabgroupComponent} from './tabs/tabgroup.component'
import {TabComponent} from './tabs/tab.component'

import {HeroService} from './hero.service/index'

@Component({
  // Ref: http://blog.thoughtram.io/angular/2015/06/29/shadow-dom-strategies-in-angular2.html
  // Use native Shadow DOM instead of attribute tricks
    encapsulation: ViewEncapsulation.Native,
    selector: 'my-app',
    templateUrl: './app/app.tpl.html',
  // NOTE: be explicit of using Array to avoid WebStorm warnings.
  directives: [
    HeroDetailComponent, HeroListComponent,
    TabgroupComponent, TabComponent,
  ],
  providers: [HeroService]
})
export class AppComponent implements OnInit {
  constructor(private _heroService: HeroService) {}
  public westHeroes: Hero[];
  public chnHeroes: Hero[];
  public title = 'Tour of Heroes';
  // todo: not to be shared among western and chinese heroes
  // needs a separate component: HeroBoard
  public selectedHero: Hero;
  public onSelect(hero: Hero) { this.selectedHero = hero; }

  // NOTE: do NOT pass getHeroes as then callback as it would lose 'this'
  // context
  getHeroes() {
    this._heroService.getHeroes().then(heroes => {
      this.westHeroes = heroes.west;
      this.chnHeroes = heroes.chinese;
    });
  }
  // Use life cycle hook to avoid complex logic in constructor
  ngOnInit() {
    this.getHeroes();
  }
}
