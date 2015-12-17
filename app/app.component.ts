import {Component, ViewEncapsulation} from 'angular2/core';

// If we need a Hero that goes beyond simple properties, a Hero with logic and behavior, we must define a class. If we only need type checking, the interface is sufficient and lighter weight.
interface Hero {
    id: number;
    name: string;
}

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

        <div *ngIf="selectedHero">
          <h2>{{selectedHero.name}} details!</h2>
          <div><label>id: </label>{{selectedHero.id}}</div>
          <div>
              <label>name: </label>
              <div><input [(ngModel)]="selectedHero.name" placeholder="name"></div>
          </div>
        </div>
    `,
    styles:[`
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
    `]
})
export class AppComponent {
  public heroes = HEROES;
  public title = 'Tour of Heroes';
  public selectedHero: Hero;
  public onSelect(hero: Hero) { this.selectedHero = hero; }
}
