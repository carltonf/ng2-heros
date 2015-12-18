import {Component, ViewEncapsulation, EventEmitter} from 'angular2/core'
import {Hero} from '../hero'

@Component({
  selector: "my-hero-list",
  templateUrl: "app/hero-list.component/tpl.html",
  styleUrls: ["app/hero-list.component/view.css"],
  inputs: ['heroes'],
  // the property for output should be the same string (the doc is out of sync)
  outputs: ['onSelectedHero']
})
export class HeroListComponent {
  // TODO the manual event emitter feels clummsy, any shortcuts?
  public onSelectedHero = new EventEmitter();
  public selectedHero: Hero;
  public onSelect(hero: Hero) {
    this.selectedHero = hero;
    // listeners use $event to get the value passed
    this.onSelectedHero.emit(hero);
  }
}