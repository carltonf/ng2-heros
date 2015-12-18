import {Component, ViewEncapsulation} from 'angular2/core'
import {Hero} from './hero'
// There is NO node style folder module resolution
// ref: https://github.com/Microsoft/TypeScript/issues/5039
import {HeroDetailComponent} from './hero-detail.component/index'
import {HeroListComponent} from './hero-list.component/index'

// TODO migrate to some data service
var HEROES: Hero[] = [
    { "id": 11, "name": "Mr. Nice" },
    { "id": 12, "name": "Narco" },
    { "id": 13, "name": "Bombasto" },
    { "id": 14, "name": "Celeritas" },
    { "id": 15, "name": "Magneta" },
    { "id": 16, "name": "RubberMan" },
    { "id": 17, "name": "Dynama" },
    { "id": 18, "name": "Dr IQ" },
    { "id": 19, "name": "Magma" },
    { "id": 20, "name": "Tornado" }
];

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
  directives: [HeroDetailComponent, HeroListComponent]
})
export class AppComponent {
  public heroes = HEROES;
  public title = 'Tour of Heroes';
  public selectedHero: Hero;
  public onSelect(hero: Hero) { this.selectedHero = hero; }
}
