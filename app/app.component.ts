import {Component, OnInit, ViewEncapsulation} from 'angular2/core'
import {Hero} from './hero'
// There is NO node style folder module resolution
// ref: https://github.com/Microsoft/TypeScript/issues/5039
import {HeroDetailComponent} from './hero-detail.component/index'
import {HeroListComponent} from './hero-list.component/index'

import {HeroService} from './hero.service/index'

@Component({
  // Ref: http://blog.thoughtram.io/angular/2015/06/29/shadow-dom-strategies-in-angular2.html
  // Use native Shadow DOM instead of attribute tricks
    encapsulation: ViewEncapsulation.Native,
    selector: 'my-app',
    template: `
        <h1>{{title}}</h1>
        <h2>My Heroes</h2>
        <my-hero-list [heroes]="heroes"
                      (onSelectedHero)="onSelect($event)">
        </my-hero-list>
        <hr *ngIf="selectedHero">
        <my-hero-detail [hero]="selectedHero"></my-hero-detail>
    `,
  // NOTE: be explicit of using Array to avoid WebStorm warnings.
  directives: [HeroDetailComponent, HeroListComponent],
  providers: [HeroService]
})
export class AppComponent implements OnInit {
  constructor(private _heroService: HeroService) {}
  public heroes: Hero[];
  public title = 'Tour of Heroes';
  public selectedHero: Hero;
  public onSelect(hero: Hero) { this.selectedHero = hero; }

  // NOTE: do NOT pass getHeroes as then callback as it would lose 'this'
  // context
  getHeroes() {
    this._heroService.getHeroes().then(heroes => this.heroes = heroes);
  }
  // Use life cycle hook to avoid complex logic in constructor
  ngOnInit() {
    this.getHeroes();
  }
}
