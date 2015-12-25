import {Component, ViewEncapsulation, EventEmitter} from 'angular2/core'
import {Hero} from '../hero'

@Component({
  selector: "my-hero-list",
  moduleId: module.id,
  templateUrl: "tpl.html",
  styleUrls: ["style.css"],
  inputs: ['heroes'],
  // the property for output should be the same string (the doc is out of sync)
  outputs: ['onSelectedHero']
})
export class HeroListComponent {
  public heroes: Hero[];
  // TODO the manual event emitter feels clummsy, any shortcuts?
  public onSelectedHero = new EventEmitter();
  public selectedHero: Hero;
  public onSelect(hero: Hero) {
    this.selectedHero = hero;
    // listeners use $event to get the value passed
    this.onSelectedHero.emit(hero);
  }
}
