import {Component, ViewEncapsulation} from 'angular2/core'
import {Hero} from './hero'
// There is NO node style folder module resolution
// ref: https://github.com/Microsoft/TypeScript/issues/5039
import {HeroDetailComponent} from './hero-detail.component/index'

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
        <ul class="heroes">
            <li *ngFor="#hero of heroes"
                [class.selected]="hero === selectedHero"
                (click)="onSelect(hero)">
                <span class="badge">{{hero.id}}</span> {{hero.name}}
            </li>
        </ul>
        <hr *ngIf="selectedHero">
        <my-hero-detail [hero]="selectedHero"></my-hero-detail>
    `,
    styles: [`
      .heroes {list-style-type: none; margin-left: 1em; padding: 0; width: 10em;}
      .heroes li { cursor: pointer; position: relative; left: 0; transition: all 0.2s ease; }
      .heroes li:hover {color: #369; background-color: #EEE; left: .2em;}
      .heroes .badge {
        font-size: small;
        color: white;
        padding: 0.1em 0.7em;
        background-color: #369;
        line-height: 1em;
        position: relative;
        left: -1px;
        top: -1px;
      }
      .selected { background-color: #EEE; color: #369; }
    `],

  // NOTE: be explicit of using Array to avoid WebStorm warnings.
  directives: Array(HeroDetailComponent)
})
export class AppComponent {
  public heroes = HEROES;
  public title = 'Tour of Heroes';
  public selectedHero: Hero;
  public onSelect(hero: Hero) { this.selectedHero = hero; }
}
